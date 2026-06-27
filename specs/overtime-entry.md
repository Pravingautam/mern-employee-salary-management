# Acceptance Criteria — Overtime Entry Screen

## Feature Overview
Site managers log overtime for workers at the end
of each day from the construction site on mobile.

## Required Fields
- Worker name (must exist in system)
- Number of overtime hours
- Date
- Reason for overtime

## Acceptance Criteria

### Happy Path
- Manager can submit overtime with all valid fields
- Overtime appears in worker attendance record
- Salary calculation includes overtime amount

### Edge Cases
- Worker already has 60 hours this month — system
  should warn or block additional overtime entry
- Two supervisors log overtime for same worker
  same day — system should detect duplicate
- Hours field accepts only numbers, not text
- Zero hours should not be allowed
- Negative hours should be rejected
- Date cannot be a future date

### Mobile/Offline
- Form must work on mobile browser
- If phone loses connection mid-submit, data
  should not be lost silently

## Launch Blocker vs V2

### Must have before launch:
- Basic overtime submission works
- Validation on all fields
- Overtime reflects in salary calculation

### Can wait for V2:
- Offline mode
- Duplicate detection across supervisors
- Hour cap warnings
