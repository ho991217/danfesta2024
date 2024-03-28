import { test, expect, devices } from '@playwright/test';

test('홈 화면 테스트', async ({ page }) => {
  await page.goto('https://danfesta2024.vercel.app/ko');
  const message = '모바일 환경에서 접속해주세요.';

  if (devices['Desktop Chrome']) await page.isVisible(`text=${message}`);
  else !(await page.isVisible(`text=${message}`));
});
