import { expect, test } from '@playwright/test';
import { payInDemo, signIn } from './helpers';

// Journey 1 (ARCHITECTURE §7): browse → cart → checkout → payment → order placed.
test('online purchase with frozen delivery', async ({ page }) => {
  await page.goto('/products/hong-xun-mi-gao');
  await expect(page.getByRole('heading', { name: '紅蟳米糕' })).toBeVisible();
  await expect(page.getByText('食品標示')).toBeVisible();
  await page.getByRole('button', { name: /加入購物車・NT\$880/ }).click();
  await expect(page.getByText(/已加入購物車/)).toBeVisible();

  await page.goto('/cart');
  await page.getByRole('link', { name: '前往結帳' }).click();
  await signIn(page, '0911222333');
  await expect(page.getByText(/已驗證 0911-\*\*\*-333/)).toBeVisible();

  // US-3.3: only frozen delivery and store pickup are offered.
  await expect(page.getByRole('radio')).toHaveCount(2 + 3);
  await page.getByLabel('收件人').fill('陳媽媽');
  await page.getByLabel('地址').fill('中正路 100 號');
  await expect(page.getByText('NT$1,060').last()).toBeVisible();
  await payInDemo(page);

  await expect(page.getByRole('heading', { name: '付款成功' })).toBeVisible();
  await page.getByRole('link', { name: '查看訂單' }).click();
  await expect(page.getByText('已付款').first()).toBeVisible();
  await expect(page.getByText('來源：線上')).toBeVisible();
});

test('a failed payment keeps the hold and offers a retry (US-2 scenario 4)', async ({ page }) => {
  await page.goto('/products/yu-chi-geng');
  await page.getByRole('button', { name: /加入購物車/ }).click();
  await expect(page.getByText('已加入購物車（1 份）', { exact: true })).toBeVisible();
  await page.goto('/checkout');
  await signIn(page, '0911222444');
  await page.getByLabel('收件人').fill('測試');
  await page.getByLabel('地址').fill('測試路 1 號');
  await payInDemo(page, '失敗');
  await expect(page.getByRole('heading', { name: '付款沒有成功' })).toBeVisible();
  await expect(page.getByRole('link', { name: '重新付款' })).toBeVisible();
});
