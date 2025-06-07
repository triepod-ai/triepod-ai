# Pre-Push Validation Scripts

This directory contains scripts for comprehensive pre-push validation with separated concerns.

## Scripts Overview

### 1. `pre-push-build-check.sh`
**Purpose**: Build validation only
- Checks if build-critical files were changed
- Runs `npm run build` to ensure the project builds successfully
- Skips validation if no build-critical files changed (performance optimization)
- Provides clear error messages and debugging hints

**Usage**:
```bash
# Run manually
./scripts/pre-push-build-check.sh

# As part of git hook
ln -s ../../scripts/pre-push-build-check.sh .git/hooks/pre-push
```

### 2. `pre-push-complete.sh`
**Purpose**: Complete validation (linting + build)
- Runs both code quality validation (existing linting hook)
- Runs build validation (new build check script)
- Keeps concerns separated while ensuring comprehensive validation
- Provides clear progress indication for each step

**Usage**:
```bash
# Run manually
./scripts/pre-push-complete.sh

# As git hook (replaces single-purpose hooks)
ln -s ../../scripts/pre-push-complete.sh .git/hooks/pre-push
```

## Current Setup

The project currently has:
- **Linting Hook**: `.git/hooks/pre-push` (focuses on code quality via Claude CLI)
- **Build Validation**: `scripts/pre-push-build-check.sh` (focuses on build success)
- **Complete Validation**: `scripts/pre-push-complete.sh` (runs both sequentially)

## Recommended Usage

### Option 1: Separate Hooks (Current)
Keep the existing linting-focused pre-push hook and run build validation manually when needed:

```bash
# Automatic linting on push (current setup)
git push

# Manual build validation when needed
./scripts/pre-push-build-check.sh
```

### Option 2: Complete Validation Hook
Replace the current pre-push hook with the complete validation script:

```bash
# Remove current hook
rm .git/hooks/pre-push

# Link to complete validation
ln -s ../../scripts/pre-push-complete.sh .git/hooks/pre-push

# Now all pushes run both linting and build validation
git push
```

### Option 3: Manual Control
Remove automatic hooks and run validations manually:

```bash
# Before pushing, run validations manually
./scripts/pre-push-complete.sh
git push
```

## Build-Critical Files

The build validation script monitors changes to:
- TypeScript/JavaScript files: `*.ts`, `*.tsx`, `*.js`, `*.jsx`
- Configuration files: `package.json`, `tsconfig.json`, `next.config.js`, `tailwind.config.ts`
- Content files: `*.md`
- Any other files that could affect the build process

## Performance Optimization

- **Build validation** only runs when build-critical files are changed
- **Linting validation** runs based on the existing Claude CLI integration
- Scripts exit early when no relevant changes are detected
- Clear progress indication prevents confusion during validation

## Error Handling

Both scripts provide:
- Clear error messages with context
- Suggested fixes for common issues
- Proper exit codes for CI/CD integration
- Color-coded output for better readability