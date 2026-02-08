// const { test, expect } = require('@playwright/test');

// test('Successful login', async ({ page }) => {
//   await page.goto('http://localhost:3000/login');

//   await page.fill('input[name="email"]', 'test@example.com');
//   await page.fill('input[name="password"]', 'password123');

//   await page.click('button[type="submit"]');

//   await expect(page).toHaveURL('http://localhost:3000/dashboard');
//   await expect(page.locator('text=Welcome')).toBeVisible();
// });

// test('Invalid login shows error', async ({ page }) => {
//   await page.goto('http://localhost:3000/login');

//   await page.fill('input[name="email"]', 'wrong@example.com');
//   await page.fill('input[name="password"]', 'wrongpassword');

//   await page.click('button[type="submit"]');

//   await expect(page.locator('text=Invalid credentials')).toBeVisible();
// });

// test('Protected route redirects to login', async ({ page }) => {
//   await page.goto('http://localhost:3000/dashboard');

//   await expect(page).toHaveURL('http://localhost:3000/login');
// });
