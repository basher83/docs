---
allowed-tools: mcp__github__get_pull_request, mcp__github__get_pull_request_diff, mcp__github__get_pull_request_files, mcp__github__get_pull_request_comments, mcp__github__get_pull_request_reviews, mcp__github__get_pull_request_status, mcp__github__list_workflow_runs, mcp__github__get_job_logs
description: Gather comprehensive context about a specific PR including details, comments, reviews, and CI status
---

# PR Context

This command loads comprehensive context about a pull request to provide optimal understanding before starting work on it.

## Instructions

### 1. Parse PR Number

- Extract the PR number from $ARGUMENTS (e.g., if user types `/pr-context 23`, $ARGUMENTS will be "23")
- Set owner="basher83" and repo="docs" as defaults
- Set pullNumber to the parsed PR number

### 2. Gather Core PR Information

- Use mcp__github__get_pull_request with owner="basher83", repo="docs", pullNumber=$ARGUMENTS to get PR title, description, author, and base/head branches
- Use mcp__github__get_pull_request_status with owner="basher83", repo="docs", pullNumber=$ARGUMENTS to understand merge conflicts and CI check status
- Use mcp__github__get_pull_request_files with owner="basher83", repo="docs", pullNumber=$ARGUMENTS to see all files changed (understand scope of changes)

### 3. Gather Collaboration Context  

- Use mcp__github__get_pull_request_comments with owner="basher83", repo="docs", pullNumber=$ARGUMENTS to read all discussion comments
- Use mcp__github__get_pull_request_reviews with owner="basher83", repo="docs", pullNumber=$ARGUMENTS to see review feedback and approval status
- Note any requested changes or unresolved conversations

### 4. Analyze Changes

- Use mcp__github__get_pull_request_diff with owner="basher83", repo="docs", pullNumber=$ARGUMENTS to examine the actual code changes
- Identify patterns in the changes (refactoring, new feature, bug fix, etc.)

### 5. Check CI/CD Status (if checks are failing)

- If CI checks are failing from step 2, use mcp__github__list_workflow_runs with owner="basher83", repo="docs" to identify failed workflows
- For failed jobs, use mcp__github__get_job_logs with owner="basher83", repo="docs", failed_only=true to get error logs
- Note any test failures, linting issues, or build problems

### 6. Provide Summary

After gathering all context, provide a structured summary including:

- **PR Overview**: Title, author, target branch, current status
- **Changes Summary**: Number of files, additions/deletions, types of changes  
- **Review Status**: Approvals needed, changes requested, unresolved comments
- **CI Status**: Passing/failing checks, specific errors if any
- **Next Actions**: Clear recommendations for what needs to be addressed

## Usage

```
/pr-context 23
```

Provide the PR number as an argument to gather comprehensive context about that specific pull request.
