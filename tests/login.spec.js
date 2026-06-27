import { test, expect } from '@playwright/test';

test('HRMS Login Test', async ({ page }) => {
  await page.goto('http://localhost:3000/login'); 
  
  await page.fill('input[name="email"]', 'admin@test.com');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  
  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.locator('h1')).toContainText('Dashboard');
});
