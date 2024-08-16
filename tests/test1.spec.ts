import { test, expect } from '@playwright/test';
test('Đăng ký tài khoản thành công', async ({ page }) => {
    // Truy cập trang web
    await page.goto('https://material.playwrightvn.com/');
    // Click vào "Bài học 1: Register Page"
    await page.locator("//a[@href='01-xpath-register-page.html'] ").click();
    // Dien username
    await page.locator("//input[@id='username']").fill("trinh050799");
    //Dien email
    await page.locator("//input[@id='email']").fill("thuytrinhtqt050799@gmail.com");
    //Chon gioi tinh
    await page.locator("//input[@id='female']").check();
    //Chon hobbies
    await page.locator("//input[@id='reading']").check();
    //Chon country
    await page.locator("//select[@id='country']").selectOption("Canada");
    // Chon Date of Birth
    await page.locator("//input[@id='dob']").fill("1999-05-07");
    // Nhap Biography
    await page.locator("//textarea[@id='bio']").fill("Hien tai la tester");
    // Hover over me
    await page.locator("//div[@class='tooltip']").hover();
    // Check newsletter
    await page.locator("//input[@id='newsletter']").check();
    // Click button Register
    await page.locator("//button[@type='submit']").click();
});