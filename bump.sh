#!/bin/bash
set -e

# Get the latest semver tag
LATEST=$(git tag --list 'v*.*.*' --sort=-v:refname | head -1)

if [ -z "$LATEST" ]; then
    LATEST="v0.0.0"
fi

echo "Current version: $LATEST"

# Parse version components
VERSION=${LATEST#v}
IFS='.' read -r MAJOR MINOR PATCH <<< "$VERSION"

# Default to patch bump
BUMP_TYPE=${1:-patch}

case $BUMP_TYPE in
    major)
        MAJOR=$((MAJOR + 1))
        MINOR=0
        PATCH=0
        ;;
    minor)
        MINOR=$((MINOR + 1))
        PATCH=0
        ;;
    patch)
        PATCH=$((PATCH + 1))
        ;;
    *)
        echo "Usage: $0 [major|minor|patch]"
        exit 1
        ;;
esac

NEW_VERSION="v${MAJOR}.${MINOR}.${PATCH}"
echo "New version: $NEW_VERSION"

git tag -a "$NEW_VERSION" -m "Release $NEW_VERSION"
echo "Tag $NEW_VERSION created. Run 'git push origin $NEW_VERSION' to push."
