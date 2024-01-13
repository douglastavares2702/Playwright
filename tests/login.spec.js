import { test, expect } from '@playwright/test';

    /// Before of each test execution
test.describe('login tests', async () => {

test('Accessing page Sauce Demo', async ({ page }) => {

    /// Visiting the page
await page.goto('https://www.saucedemo.com/');

    /// Verification of page access
await expect(await page.title()).toBe('Swag Labs');

    /// Successfully filling in login and password
await page.locator('[id="user-name"]').fill('standard_user');
await page.locator('[id="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();

    /// Validate access to the page
await page.getByText('Sauce Labs');

    /// Screenshot when the test finished
await page.screenshot({path:'todo.png'});
    /// Save to PDF
await page.pdf({ path:'mypage.pdf'});

})
});