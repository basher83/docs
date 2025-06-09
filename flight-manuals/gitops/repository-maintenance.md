# 🔧 Repository Maintenance Guide
![Last Updated](https://img.shields.io/badge/Last%20Updated-2025--06--09-success)

Comprehensive guide for ongoing repository maintenance, monitoring, and optimization.

## Overview

Regular repository maintenance ensures project health, security, and team productivity. This guide establishes systematic approaches to repository care using space mission metaphors.

## Maintenance Schedule

### Daily Operations (Automated)
- **Dependency Security Scans** - Automated via Dependabot
- **Build Status Monitoring** - GitHub Actions notifications
- **Integration Health Checks** - External service monitoring
- **Backup Verification** - Repository data safety

### Weekly Missions (Manual Review)
- **Issue Triage and Cleanup** - Review new issues, update labels
- **PR Review Queue** - Ensure timely code reviews
- **Documentation Currency** - Check for outdated information
- **Metric Review** - Analyze project velocity and health

### Monthly Orbital Adjustments
- **Dependency Updates** - Review and approve major updates
- **Security Audit** - Comprehensive security review
- **Performance Analysis** - Repository and workflow optimization
- **Team Process Review** - Evaluate and improve workflows

### Quarterly Mission Planning
- **Strategic Review** - Project direction and priorities
- **Technical Debt Assessment** - Identify refactoring opportunities
- **Tool and Process Evaluation** - Adopt new tools and practices
- **Team Training and Development** - Skill enhancement planning

## Daily Maintenance Tasks

### Automated Monitoring Setup

**GitHub Actions for Daily Checks:**
```yaml
name: 🛰️ Daily Orbit Check
on:
  schedule:
    - cron: '0 8 * * *'  # 8 AM daily

jobs:
  health-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Repository Health Check
        run: |
          echo "🔍 Mission Status Report - $(date)"
          echo "======================================="
          
          # Check for stale branches
          echo "📊 Stale Branch Analysis:"
          git for-each-ref --format='%(refname:short) %(committerdate)' refs/remotes/origin | 
            awk '$2 < "'$(date -d '30 days ago' '+%Y-%m-%d')'"' | 
            head -10
          
          # Check open issues without labels
          echo "🏷️ Unlabeled Issues:"
          gh issue list --state open --limit 5 --json number,title,labels --jq '.[] | select(.labels | length == 0) | "\(.number): \(.title)"'
          
          # Check PRs without reviewers
          echo "👥 PRs Awaiting Review:"
          gh pr list --state open --json number,title,reviewRequests --jq '.[] | select(.reviewRequests | length == 0) | "\(.number): \(.title)"'
          
          # Check failed workflows
          echo "⚠️ Recent Workflow Failures:"
          gh run list --status failure --limit 5 --json displayTitle,conclusion,createdAt
      
      - name: Send Slack Notification
        if: failure()
        uses: 8398a7/action-slack@v3
        with:
          status: ${{ job.status }}
          channel: '#mission-control'
          webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

### Issue Management Automation
```yaml
name: 🎯 Issue Management
on:
  issues:
    types: [opened, labeled, assigned]
  issue_comment:
    types: [created]

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - name: Auto-label based on content
        uses: actions/github-script@v6
        with:
          script: |
            const issue = context.payload.issue;
            const body = issue.body.toLowerCase();
            
            // Auto-assign labels based on content
            if (body.includes('bug') || body.includes('error')) {
              await github.rest.issues.addLabels({
                ...context.repo,
                issue_number: issue.number,
                labels: ['🐛 bug']
              });
            }
            
            if (body.includes('security') || body.includes('vulnerability')) {
              await github.rest.issues.addLabels({
                ...context.repo,
                issue_number: issue.number,
                labels: ['🔒 security', '🔴 priority-high']
              });
            }
      
      - name: Add to project board
        uses: actions/add-to-project@v0.4.0
        with:
          project-url: https://github.com/users/basher83/projects/1
          github-token: ${{ secrets.ADD_TO_PROJECT_PAT }}
```

## Weekly Maintenance Tasks

### Issue and PR Cleanup

**Stale Issue Management:**
```bash
#!/bin/bash
# Weekly stale issue cleanup script

echo "🧹 Weekly Cleanup Mission"

# Find issues without activity for 30 days
echo "Finding stale issues..."
gh issue list --state open --label "🤖 needs-info" \
  --json number,title,updatedAt \
  --jq '.[] | select(.updatedAt < "'$(date -d '30 days ago' -I)'")' \
  > stale_issues.json

# Add stale label and comment
while read -r issue; do
  issue_number=$(echo "$issue" | jq -r '.number')
  echo "Marking issue #$issue_number as stale"
  
  gh issue comment $issue_number --body "🛰️ **Mission Update Required**

This issue has been inactive for 30 days. Please provide an update or this issue will be closed in 7 days.

To keep this issue active:
- Add a comment with current status
- Update labels if priorities have changed
- Close if no longer relevant

*This is an automated message from Mission Control*"
  
  gh issue edit $issue_number --add-label "🕰️ stale"
done < <(cat stale_issues.json | jq -c '.')

# Close issues stale for more than 37 days
gh issue list --state open --label "🕰️ stale" \
  --json number,updatedAt \
  --jq '.[] | select(.updatedAt < "'$(date -d '37 days ago' -I)'") | .number' | \
while read -r issue_number; do
  echo "Closing stale issue #$issue_number"
  gh issue close $issue_number --comment "🚀 **Mission Timeout**

Closing due to inactivity. This issue can be reopened if still relevant.

*Automated by Mission Control*"
done
```

**PR Review Monitoring:**
```bash
#!/bin/bash
# Weekly PR review monitoring

echo "📋 PR Review Status Report"

# PRs waiting for review
echo "🔍 PRs Awaiting Review:"
gh pr list --state open --json number,title,author,createdAt \
  --jq '.[] | select(.reviewRequests | length == 0) | 
       "PR #\(.number): \(.title) by @\(.author.login) (created \(.createdAt | strptime("%Y-%m-%dT%H:%M:%SZ") | strftime("%Y-%m-%d")))"'

# Long-running PRs
echo "⏰ Long-running PRs (> 7 days):"
gh pr list --state open --json number,title,createdAt \
  --jq '.[] | select(.createdAt < "'$(date -d '7 days ago' -I)'") | 
       "PR #\(.number): \(.title) (age: \(.createdAt | strptime("%Y-%m-%dT%H:%M:%SZ") | strftime("%Y-%m-%d")))"'

# Draft PRs
echo "📝 Draft PRs:"
gh pr list --state open --draft --json number,title,author
```

### Documentation Currency Check
```bash
#!/bin/bash
# Weekly documentation freshness check

echo "📚 Documentation Currency Check"

# Find files with outdated "Last Updated" badges
find . -name "*.md" -exec grep -l "Last%20Updated" {} \; | while read -r file; do
  last_updated=$(grep -o 'Last%20Updated-[0-9-]*' "$file" | cut -d'-' -f2-)
  file_modified=$(date -r "$file" +%Y-%m-%d)
  
  if [[ "$last_updated" < "$file_modified" ]]; then
    echo "📅 Outdated badge in $file: badge shows $last_updated, file modified $file_modified"
  fi
done

# Check for broken internal links
echo "🔗 Checking internal links..."
find . -name "*.md" -exec grep -H '\[.*\](\..*\.md)' {} \; | while IFS=: read -r file link; do
  link_path=$(echo "$link" | sed -n 's/.*](\(.*\)).*/\1/p')
  if [[ ! -f "$(dirname "$file")/$link_path" ]]; then
    echo "🔗 Broken link in $file: $link_path"
  fi
done
```

## Monthly Maintenance Tasks

### Dependency Management

**Comprehensive Dependency Review:**
```yaml
name: 🔍 Monthly Dependency Audit
on:
  schedule:
    - cron: '0 9 1 * *'  # First day of month at 9 AM

jobs:
  dependency-audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Security Audit
        run: |
          echo "🔒 Security Vulnerability Scan"
          npm audit --audit-level moderate
          
          echo "📊 Dependency Analysis"
          npx license-checker --summary
          
          echo "📦 Outdated Packages"
          npm outdated
      
      - name: Generate Dependency Report
        run: |
          cat << 'EOF' > dependency-report.md
          # 📊 Monthly Dependency Report
          
          ## 🔒 Security Status
          $(npm audit --audit-level moderate | tail -n 10)
          
          ## 📦 Outdated Dependencies
          $(npm outdated)
          
          ## 📈 Recommendations
          - Review security vulnerabilities above
          - Plan updates for major version changes
          - Consider alternatives for deprecated packages
          
          ## 🎯 Action Items
          - [ ] Review security findings
          - [ ] Update development dependencies
          - [ ] Test compatibility with new versions
          - [ ] Update documentation if needed
          EOF
      
      - name: Create Issue for Review
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const report = fs.readFileSync('dependency-report.md', 'utf8');
            
            await github.rest.issues.create({
              ...context.repo,
              title: '📊 Monthly Dependency Review - ' + new Date().toISOString().slice(0, 7),
              body: report,
              labels: ['🔧 maintenance', '📦 dependencies', '📋 monthly-review']
            });
```

### Performance Analysis
```bash
#!/bin/bash
# Monthly performance analysis

echo "⚡ Monthly Performance Analysis"

# Repository size analysis
echo "💾 Repository Size Analysis:"
git count-objects -vH

# Largest files analysis
echo "📊 Largest Files:"
git rev-list --objects --all | 
  git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' |
  sed -n 's/^blob //p' |
  sort --numeric-sort --key=2 --reverse |
  head -10

# Branch analysis
echo "🌳 Branch Analysis:"
git for-each-ref --format='%(refname:short) %(committerdate) %(authorname)' refs/heads |
  sort -k2 -r

# Contributor activity
echo "👥 Contributor Activity (last 30 days):"
git shortlog --since="30 days ago" --numbered --summary

# Commit frequency
echo "📈 Commit Frequency (last 30 days):"
git log --since="30 days ago" --format="%ad" --date=short | sort | uniq -c
```

### Security Review
```bash
#!/bin/bash
# Monthly security review

echo "🔒 Monthly Security Audit"

# Check for exposed secrets
echo "🔍 Secret Scanning:"
git log --all --full-history -- **/*.env* **/*secret* **/*key* | head -20

# Check file permissions
echo "🔐 File Permission Review:"
find . -type f \( -name "*.sh" -o -name "*.py" \) -executable -ls

# Review .gitignore effectiveness
echo "📝 .gitignore Review:"
git status --porcelain | grep "^??" | head -10

# Check for hardcoded credentials patterns
echo "🚨 Credential Pattern Check:"
grep -r -i "password\|secret\|key\|token" --include="*.js" --include="*.py" --include="*.md" . | head -5
```

## Quarterly Maintenance Tasks

### Strategic Repository Review

**Technical Debt Assessment:**
```markdown
# 🔍 Quarterly Technical Debt Assessment

## Code Quality Metrics
- [ ] Code complexity analysis
- [ ] Test coverage review
- [ ] Documentation completeness
- [ ] Performance benchmarks

## Infrastructure Review
- [ ] CI/CD pipeline efficiency
- [ ] Build time optimization
- [ ] Resource utilization
- [ ] Security compliance

## Process Evaluation
- [ ] Development workflow effectiveness
- [ ] Code review quality
- [ ] Issue resolution time
- [ ] Team satisfaction survey

## Technology Stack Review
- [ ] Framework/library updates
- [ ] Tool effectiveness
- [ ] Alternative solution evaluation
- [ ] Migration planning

## Action Items
Based on assessment results:
1. Prioritize technical debt items
2. Plan refactoring sprints
3. Update development standards
4. Schedule training sessions
```

### Repository Optimization

**Performance Optimization Checklist:**
```bash
#!/bin/bash
# Quarterly optimization script

echo "🚀 Quarterly Repository Optimization"

# Clean up Git repository
echo "🧹 Git Cleanup:"
git gc --aggressive --prune=now
git remote prune origin
git branch --merged | grep -v "\*\|main\|master" | xargs -n 1 git branch -d

# Update documentation
echo "📚 Documentation Update:"
# Generate new table of contents
find . -name "*.md" -not -path "./node_modules/*" | sort > docs_inventory.txt

# Check for large binary files
echo "📊 Large File Analysis:"
git rev-list --all --objects | \
  grep "$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -10 | awk '{print$1}')"

# Archive old branches
echo "📦 Branch Archiving:"
git for-each-ref --format='%(refname:short) %(committerdate)' refs/remotes/origin | \
  awk '$2 < "'$(date -d '90 days ago' '+%Y-%m-%d')'"' | \
  cut -d' ' -f1 > old_branches.txt

echo "Branches older than 90 days:"
cat old_branches.txt
```

## Monitoring and Alerts

### Health Metrics Dashboard

**Key Performance Indicators:**
- **Repository Health Score** - Combination of multiple metrics
- **Issue Resolution Time** - Average time from open to close
- **PR Merge Time** - Average time from creation to merge
- **Build Success Rate** - Percentage of successful builds
- **Security Vulnerability Count** - Number of known vulnerabilities
- **Documentation Coverage** - Percentage of documented features
- **Test Coverage** - Code coverage percentage
- **Contributor Activity** - Active contributors per month

### Alert Configuration

**Critical Alerts:**
```yaml
# .github/workflows/critical-alerts.yml
name: 🚨 Critical Alerts
on:
  push:
    branches: [main]
  pull_request:
    types: [opened, synchronize]

jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Security Alert Check
        run: |
          # Check for high-severity vulnerabilities
          npm audit --audit-level high --json > audit.json
          
          if [ -s audit.json ] && [ "$(jq '.metadata.vulnerabilities.high' audit.json)" -gt 0 ]; then
            echo "🚨 HIGH SEVERITY VULNERABILITIES DETECTED"
            jq '.advisories' audit.json
            exit 1
          fi
      
      - name: Notify on Failure
        if: failure()
        uses: 8398a7/action-slack@v3
        with:
          status: failure
          channel: '#security-alerts'
          webhook_url: ${{ secrets.SLACK_WEBHOOK }}
          text: '🚨 Critical security vulnerabilities detected in ${{ github.repository }}'
```

## Automation Scripts

### Repository Health Script
Create `scripts/health-check.sh`:
```bash
#!/bin/bash
# Comprehensive repository health check

REPO_NAME=$(basename $(pwd))
REPORT_FILE="health-report-$(date +%Y%m%d).md"

cat << EOF > $REPORT_FILE
# 🛰️ Repository Health Report
**Repository:** $REPO_NAME  
**Date:** $(date)  
**Report Generated By:** Mission Control Automation

## 📊 Repository Statistics
EOF

# Add repository stats
echo "- **Total Commits:** $(git rev-list --all --count)" >> $REPORT_FILE
echo "- **Contributors:** $(git shortlog -sn | wc -l)" >> $REPORT_FILE
echo "- **Branches:** $(git branch -r | wc -l)" >> $REPORT_FILE
echo "- **Open Issues:** $(gh issue list --state open | wc -l)" >> $REPORT_FILE
echo "- **Open PRs:** $(gh pr list --state open | wc -l)" >> $REPORT_FILE

echo "" >> $REPORT_FILE
echo "## 🎯 Action Items" >> $REPORT_FILE

# Check for action items
if [ $(git branch --merged | grep -v "\*\|main\|master" | wc -l) -gt 0 ]; then
  echo "- [ ] Clean up merged branches" >> $REPORT_FILE
fi

if [ $(gh issue list --state open --label "🕰️ stale" | wc -l) -gt 0 ]; then
  echo "- [ ] Review stale issues" >> $REPORT_FILE
fi

echo "Health report generated: $REPORT_FILE"
```

Make executable:
```bash
chmod +x scripts/health-check.sh
```

## Best Practices

### Maintenance Workflow
1. **Schedule Regular Reviews** - Calendar reminders for maintenance tasks
2. **Automate What's Possible** - Use GitHub Actions for routine checks
3. **Document Decisions** - Keep records of maintenance actions
4. **Monitor Trends** - Track metrics over time
5. **Team Involvement** - Rotate maintenance responsibilities

### Tool Integration
- **GitHub CLI** - Command-line repository management
- **Dependabot** - Automated dependency updates
- **CodeQL** - Security vulnerability scanning
- **Renovate** - Advanced dependency management
- **Slack/Teams** - Notification integration

### Emergency Response
- **Security Incidents** - Immediate vulnerability patching
- **Build Failures** - Quick rollback procedures
- **Performance Issues** - Rapid diagnosis and resolution
- **Data Recovery** - Backup restoration procedures

---

**Mission Control Reference**: Maintenance schedules and automation templates available in `mission-control/github-configs/`