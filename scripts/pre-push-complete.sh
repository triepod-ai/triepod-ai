#!/bin/bash

# Complete Pre-Push Validation
# This script runs both linting and build validation before allowing pushes
# Keeps concerns separated while ensuring comprehensive validation

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

echo -e "${PURPLE}🚀 Complete Pre-Push Validation${NC}"
echo "=========================================="

# Get the project root
PROJECT_ROOT=$(git rev-parse --show-toplevel)
cd "$PROJECT_ROOT"

# Step 1: Run linting validation
echo -e "${BLUE}Step 1: Code Quality Validation${NC}"
echo "----------------------------------------"

if [ -f ".git/hooks/pre-push" ]; then
    # Run the existing linting pre-push hook
    bash .git/hooks/pre-push
    LINT_EXIT_CODE=$?
    
    if [ $LINT_EXIT_CODE -ne 0 ]; then
        echo -e "${RED}❌ Linting validation failed${NC}"
        exit $LINT_EXIT_CODE
    fi
    
    echo -e "${GREEN}✅ Code quality validation passed${NC}"
else
    echo -e "${YELLOW}⚠️  No linting pre-push hook found, skipping${NC}"
fi

echo ""

# Step 2: Run build validation
echo -e "${BLUE}Step 2: Build Validation${NC}"
echo "----------------------------------------"

if [ -f "scripts/pre-push-build-check.sh" ]; then
    # Run the build validation script
    bash scripts/pre-push-build-check.sh
    BUILD_EXIT_CODE=$?
    
    if [ $BUILD_EXIT_CODE -ne 0 ]; then
        echo -e "${RED}❌ Build validation failed${NC}"
        exit $BUILD_EXIT_CODE
    fi
    
    echo -e "${GREEN}✅ Build validation passed${NC}"
else
    echo -e "${YELLOW}⚠️  No build validation script found, skipping${NC}"
fi

echo ""
echo -e "${GREEN}🎉 All pre-push validations passed! Safe to push.${NC}"
echo "=========================================="
exit 0