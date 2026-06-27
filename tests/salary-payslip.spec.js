import { test, expect } from '@playwright/test';

test('Salary update reflects in Payslip', async ({ page }) => {
  // Step 1: Login as HR
  await page.goto('/login');
  await page.fill('input[name="email"]', 'hr@test.com');
  await page.fill('input[name="password"]', 'hr123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/.*dashboard/);

  // Step 2: Go to Employee Salary page
  await page.goto('/salary');
  await page.click('text=Employee One');
  
  // Step 3: Update Basic Salary
  await page.fill('input[name="basicSalary"]', '60000');
  await page.click('button:has-text("Update Salary")');
  await expect(page.locator('.toast')).toContainText('Salary updated');

  // Step 4: Go to Payslip and verify
  await page.goto('/payslip');
  await page.selectOption('select[name="employee"]', 'Employee One');
  await page.selectOption('select[name="month"]', 'June');
  await page.click('button:has-text("Generate")');
  
  // Step 5: Check if new salary shows in payslip
  await expect(page.locator('text=Basic Salary')).toBeVisible();
  await expect(page.locator('text=60000')).toBeVisible();
});
