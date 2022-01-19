import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('input:left-of(:text("Checkbox Test"))').click();
  await expect(page.locator('text=Playwright and LuiCheckboxInput live in harmony').first()).toBeVisible();
});
