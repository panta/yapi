// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "monaco-editor",
    "monaco-yaml",
    "vscode-ws-jsonrpc",
    "vscode-languageclient",
    "monaco-languageclient",
  ],
};

export default nextConfig;
