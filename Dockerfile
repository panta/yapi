# -----------------------------------------------------------------------------
# Dockerfile for the Yapi Webapp
# -----------------------------------------------------------------------------

# 1. Yapi CLI Builder Stage
# -----------------------------------------------------------------------------
# This stage installs the yapi CLI and its dependencies into a common directory
# that can be copied into the final runner image.
FROM alpine:latest AS yapi_builder

# Install yapi's core dependencies
RUN apk add --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/edge/testing grpcurl \
    && apk add --no-cache bash curl jq yq git fzf netcat-openbsd

# Set up a clean directory for yapi artifacts
WORKDIR /yapi_dist
COPY yapi .
COPY lib ./lib
COPY .depends .

# Make scripts executable
RUN chmod +x /yapi_dist/yapi /yapi_dist/lib/*.sh


# 2. Next.js Base Stage
# -----------------------------------------------------------------------------
FROM oven/bun:1 AS base
WORKDIR /app


# 3. Dependency Installation Stage
# -----------------------------------------------------------------------------
FROM base AS deps
WORKDIR /app

# Copy only the necessary package manager files
COPY webapp/package.json webapp/bun.lockb* ./
RUN bun install --no-save --frozen-lockfile


# 4. Next.js Build Stage
# -----------------------------------------------------------------------------
FROM base AS builder
WORKDIR /app

# Copy dependencies and source code
COPY --from=deps /app/node_modules ./node_modules
COPY webapp/ ./

# Disable telemetry during build if desired
# ENV NEXT_TELEMETRY_DISABLED=1

RUN bun run build


# 5. Final Production Stage
# -----------------------------------------------------------------------------
FROM base AS runner
WORKDIR /app

# Disable telemetry during runtime if desired
# ENV NEXT_TELEMETRY_DISABLED=1

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME="0.0.0.0"

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# --- Yapi CLI Integration ---
# Copy the yapi CLI and its dependencies from the builder stage
COPY --from=yapi_builder /yapi_dist /usr/local/bin/yapi_dist

# Copy the binaries for yapi's dependencies from the builder stage.
# This ensures that the versions are consistent and they exist in the final image.
COPY --from=yapi_builder /usr/bin/yq /usr/bin/yq
COPY --from=yapi_builder /usr/bin/jq /usr/bin/jq
COPY --from=yapi_builder /usr/bin/curl /usr/bin/curl
COPY --from=yapi_builder /usr/bin/git /usr/bin/git
COPY --from=yapi_builder /usr/bin/fzf /usr/bin/fzf
COPY --from=yapi_builder /usr/bin/grpcurl /usr/bin/grpcurl
COPY --from=yapi_builder /usr/bin/nc /usr/bin/nc
COPY --from=yapi_builder /bin/bash /bin/bash

# Also copy shared libraries that these binaries might depend on.
COPY --from=yapi_builder /lib /lib
COPY --from=yapi_builder /usr/lib /usr/lib


# Add yapi to the PATH
ENV PATH="/usr/local/bin/yapi_dist:${PATH}"
# --- End Yapi CLI Integration ---


# Copy Next.js application files
COPY --from=builder /app/public ./public

# Copy build output instead of standalone dir
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=deps    --chown=nextjs:nodejs /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000

CMD ["bun", "run", "start"]
