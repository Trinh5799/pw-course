import { test, expect } from '@playwright/test';
test('Them item', async ({ page }) => {
    // Truy cập trang web
    await page.goto('https://material.playwrightvn.com/');
    //Den Todo page
    await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    //Them moi 100 todo item 
    for (let i = 1; i <= 100; i++) {
        await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
        await page.locator('//button[@id="add-task"]').click()
    }
//     //Xoa cac todo so le
//     page.on('dialog', async dialog => {
//         await dialog.accept();
//     })
//     for let (a = 1; a<=100; a++) {
//         if (a %2 != 0) {
//             await page.locator("//button[@onclick(a)")
//         }
//     }
})