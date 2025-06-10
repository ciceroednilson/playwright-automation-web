import { test, expect } from '@playwright/test';

test('test login successfully', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/index.html');
  await page.getByRole('textbox', { name: 'User:' }).click();
  await page.getByRole('textbox', { name: 'User:' }).fill('cicero');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('123456');
  await page.getByRole('button', { name: 'Access' }).click();
});