# Deployment & Release Guide

## 📋 Overview

This document outlines the process for releasing code from `main` (development) to `master` (production) branch.

## 🔐 Branch Protection on Master

The `master` branch has the following protections:

✅ **Require a pull request before merging**
- All changes must go through code review
- Cannot push directly to master

✅ **Require approvals**
- Minimum 1 approval required before merge
- Review must be from a collaborator

✅ **Applies to all users**
- Even repository administrators must follow these rules
- Ensures code quality and consistency

✅ **Do not allow bypassing**
- No emergency bypasses allowed
- Ensures all deployments go through proper review

## 📤 How to Deploy to Production

### Step 1: Prepare Release on Main
```bash
# Ensure main is fully tested and stable
git checkout main
git pull origin main

# Run tests/build verification
npm run build

# Verify dist/ folder is generated correctly
ls -la dist/
```

### Step 2: Create Release Branch (Optional)
```bash
# Create release branch from main
git checkout -b release/v1.0.0

# Make any final version updates (package.json version bump, etc.)
git add .
git commit -m "Bump version to 1.0.0"
git push origin release/v1.0.0
```

### Step 3: Create Pull Request to Master
```bash
# Option A: Via command line
git checkout master
git pull origin master
git merge release/v1.0.0
git push origin master

# Option B: Via GitHub UI (Recommended)
# 1. Go to https://github.com/ivyax-star/apex
# 2. Click "New pull request"
# 3. Select base: master, compare: main (or release/v1.0.0)
# 4. Add title: "Release v1.0.0 to Production"
# 5. Add description with:
#    - Changes included
#    - Testing done
#    - Deployment notes
# 6. Submit PR
```

### Step 4: Code Review
- Request review from team lead/QA
- Address any comments
- Wait for approval

### Step 5: Merge to Master
```bash
# After PR is approved:
# 1. Click "Merge pull request" on GitHub
# 2. Choose merge strategy: "Squash and merge" or "Create a merge commit"
# 3. Delete the branch after merging (optional)
```

### Step 6: Deploy Master
After merge to master:

```bash
# Pull latest master branch
git checkout master
git pull origin master

# Build for production
npm run build

# Verify build
ls -la dist/

# Deploy dist/ folder to your hosting:
# - Vercel: Connected via GitHub, auto-deploys
# - Netlify: Connected via GitHub, auto-deploys
# - Manual: Upload dist/ to web server
# - Docker: Build container from dist/
```

## 📊 Git Workflow Diagram

```
Feature Development:
┌─────────────────────────────┐
│  feature/add-pricing        │
│  - Develop new features     │
│  - Commit regularly         │
└─────────────┬───────────────┘
              │
              ├─→ Pull Request (Code Review)
              │
              ▼
┌─────────────────────────────┐
│  main (Development)         │
│  - Always runnable          │
│  - Latest development code  │
│  - Can be broken temporarily│
└─────────────┬───────────────┘
              │
              ├─→ Testing on staging
              │
              ├─→ Create Release PR
              │
              ▼
┌─────────────────────────────┐
│  master (Production)        │
│  - Always stable            │
│  - Protected branch         │
│  - Deployed to production   │
└─────────────────────────────┘
              │
              ├─→ Auto-deploy (if configured)
              │   or manual deployment
              │
              ▼
         🌐 Live Site
```

## 🚨 Emergency Hotfixes

If urgent fix needed on production:

```bash
# Create hotfix branch from master
git checkout master
git pull origin master
git checkout -b hotfix/fix-critical-bug

# Make fixes
git add .
git commit -m "Fix: critical production bug"

# Push and create PR to master
git push origin hotfix/fix-critical-bug

# PR must still be reviewed and approved
# After merge to master, also merge to main:
git checkout main
git pull origin main
git merge master
git push origin main
```

## ⏱️ Common Release Timeline

1. **Development Phase**: 1-2 weeks
   - Features on separate branches
   - Daily commits to main
   - Continuous integration testing

2. **QA Phase**: 2-3 days
   - Testing on main branch
   - Bug fixes
   - Documentation updates

3. **Release Preparation**: 1 day
   - Final testing
   - Version bump
   - Release notes

4. **Deployment**: Immediate
   - Create PR to master
   - Get approval
   - Merge and deploy
   - Verify live

5. **Post-Deployment**: 1 day
   - Monitor production
   - Gather user feedback
   - Hotfix any issues

## 📝 Version Numbering

Follow Semantic Versioning (SemVer):

```
v1.2.3
│ │ │
│ │ └─ Patch (bug fixes, non-breaking)
│ └─── Minor (new features, non-breaking)
└───── Major (breaking changes)
```

Examples:
- v1.0.0 - Initial release
- v1.1.0 - Add new features (backwards compatible)
- v1.1.1 - Bug fix
- v2.0.0 - Major redesign (not backwards compatible)

## 📚 Release Notes Template

```markdown
# Release v1.0.0

**Release Date**: May 18, 2026

## What's New
- ✨ New landing page design
- ✨ Improved mobile responsiveness
- ✨ Added testimonials section

## Bug Fixes
- 🐛 Fixed header navigation on mobile
- 🐛 Fixed footer links

## Breaking Changes
- None

## Deployment Notes
- No database migrations needed
- No environment variable changes
- No special deployment steps

## Testing Done
- ✅ Full responsive testing (Chrome, Firefox, Safari)
- ✅ Mobile testing (iOS, Android)
- ✅ Performance testing (Lighthouse 90+)
- ✅ Accessibility testing (WCAG 2.1 AA)

## Deployed to Production
- https://apex-edu.com
```

## ✅ Pre-Deployment Checklist

Before merging to master:

- [ ] Code is reviewed and approved
- [ ] All tests pass
- [ ] Build completes without errors
- [ ] No console errors in browser
- [ ] Performance is acceptable (Lighthouse score)
- [ ] All features work as expected
- [ ] Links are functional
- [ ] Mobile responsive design verified
- [ ] Documentation is updated
- [ ] README.md reflects new features
- [ ] Version number is bumped
- [ ] Changelog is updated

## 🔗 Useful Links

- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Keep a Changelog](https://keepachangelog.com/)

---

**Questions?** Ask the project maintainer or open an issue on GitHub.
