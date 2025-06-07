#!/bin/bash

# Pre-push Build Validation Script
# This script ensures the project builds successfully before allowing pushes
# Separate from linting - focused only on build validation

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script info
echo -e "${BLUE}🔧 Pre-push Build Validation${NC}"
echo "=========================================="

# Verify we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}❌ Not in a git repository${NC}"
    exit 1
fi

# Get the project root (where package.json should be)
PROJECT_ROOT=$(git rev-parse --show-toplevel)
cd "$PROJECT_ROOT"

# Verify this is a Node.js project
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ No package.json found in project root${NC}"
    exit 1
fi

echo -e "${BLUE}📍 Project: $(basename "$PROJECT_ROOT")${NC}"
echo -e "${BLUE}📁 Location: $PROJECT_ROOT${NC}"

# Check if there are any staged changes to build-critical files
CRITICAL_FILES=$(git diff --cached --name-only | grep -E '\.(ts|tsx|js|jsx|json|md)$|package\.json|tsconfig\.json|next\.config\.js|tailwind\.config\.ts' || true)

if [ -z "$CRITICAL_FILES" ]; then
    echo -e "${YELLOW}ℹ️  No build-critical files changed, skipping build validation${NC}"
    exit 0
fi

echo -e "${YELLOW}📋 Build-critical files changed:${NC}"
echo "$CRITICAL_FILES" | sed 's/^/  - /'
echo ""

# Run the build check
echo -e "${BLUE}🏗️  Running build validation...${NC}"

# Clean any previous build artifacts to ensure fresh build
if [ -d ".next" ]; then
    echo -e "${YELLOW}🧹 Cleaning previous build artifacts...${NC}"
    rm -rf .next
fi

# Run the build
echo -e "${BLUE}🔨 Building project...${NC}"
if npm run build; then
    echo -e "${GREEN}✅ Build successful! Safe to push.${NC}"
    echo "=========================================="
    exit 0
else
    echo -e "${RED}❌ Build failed! Fix the issues before pushing.${NC}"
    echo ""
    echo -e "${YELLOW}💡 Common fixes:${NC}"
    echo "  - Check for missing imports/exports"
    echo "  - Verify all referenced files exist"
    echo "  - Run 'npm run dev' locally to debug"
    echo "  - Check TypeScript compilation errors"
    echo ""
    echo "=========================================="
    exit 1
fi