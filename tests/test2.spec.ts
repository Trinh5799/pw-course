import { test, expect } from '@playwright/test';
test('Them san pham', async ({ page }) => {
    // Truy cập trang web
    await page.goto('https://material.playwrightvn.com/');
    // Đến trang product page
    await page.locator("//a[@href='02-xpath-product-page.html']").click();
    //San pham 1: 2 san pham
    await page.locator("//button[@data-product-id='1']").click({ clickCount: 2 });
    //San pham 2: 3 san pham
    await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
    //San pham 3: 1 san pham
    await page.locator("//button[@data-product-id='3']").click();
})