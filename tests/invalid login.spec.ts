import { test, expect } from '@playwright/test';

test('Inserting false username and password', async ({ page }) => {

    /// Using "test.step" for a visualization better
await test.step

    /// Visiting the page    
await page.goto('https://www.saucedemo.com/');

    /// Inserting false data
await expect(await page.title()).toBe('Swag Labs');
await page.locator('[id="user-name"]').fill('name false');
await page.locator('[id="password"]').fill('error');
await page.locator('[data-test="login-button"]').click();

    /// Caution the use "GetByText", can have more one of text.
const ErroLogin = await page.getByText('Epic sadface: Username and password do not match any user in this service');
    
    /// To validate if is visible text 
await expect(ErroLogin).toBeVisible();

    /// Screenshot of test
await page.screenshot({path:'todo.png'});
    /// Save in pdf
await page.pdf({ path:'mypage.pdf'});

});