import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1770518348667&no_sw_cr=1');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Sandisk stock market');
  a
  await page.getByRole('link', { name: 'Sandisk Corporation (SNDK)' }).click();
  await page.getByTestId('qsp-price').click();
});