# Test Strategy — MERN Employee Salary Management HRMS

## The System and Who Depends on It

This HRMS manages employee records, attendance, salary
calculations, and payslip generation. The people who
depend on it most are payroll operators who process
salaries for workers, and the workers themselves.
If this system produces wrong numbers or goes down
on payday, real people don't get paid on time.

## 5 Most Critical Flows (Ranked by Business Impact)

### 1. Salary Calculation and Payslip Generation
If this breaks: payroll operator cannot generate
payslips. Workers don't get paid. This is what
happened in Incident 1 — 38 workers paid 3 days late.

### 2. Employee Login and Authentication
If this breaks: employees cannot access their salary
data. HR cannot log in to process anything.

### 3. Attendance Recording
If this breaks: attendance data is wrong, salary
calculation uses wrong data, workers get underpaid.
Like Incident 2 — 12 workers excluded from payslip.

### 4. Employee Add/Edit/Delete
If this breaks: new workers don't get added,
salary records become orphaned.

### 5. Salary Deduction Settings
If this breaks: deductions apply incorrectly.
Workers get overpaid or underpaid without anyone
noticing until payday.

## What I Will Automate vs Test Manually

### Automate:
- Salary calculation math
- API endpoints — happy path and validation
- Login/logout flow
- Employee CRUD operations
- CI pipeline smoke tests (under 3 minutes)

### Test Manually:
- UI layout and visual issues
- Exploratory edge cases
- Print/export payslip

## What I Will NOT Test and Why

- CSS styling — not a business risk
- Browser compatibility — out of scope
- Performance testing — team is too small

## Team Dynamic

The senior dev fixes bugs from memory in 20 minutes.
That works at 2 sites. At 8 sites with more developers
it breaks down. My tests are not about catching the
senior dev. They are about making sure the new dev
can make changes without asking him every time.
