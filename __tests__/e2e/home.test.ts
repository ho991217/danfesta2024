import { test, expect } from '@playwright/test';

test('home page', async ({ page }) => {
  await page.goto('/');
  const title = page.locator('h1');
  await expect(title).toHaveText('DANFESTA');
});
