import { test, expect } from '@playwright/test';

test('All product names begin with "Sauce Labs"', async ({ page }) => {
      
test.fail();    
    /// Use "test.fail" for validation the test!
    /// As items contain different the texts "Sauce Labs", we usually use "test.fail".
await test.step('login', async () => {
    
await page.goto('https://www.saucedemo.com/');

    /// Verification of page access
await expect(await page.title()).toBe('Swag Labs');
await page.locator('[id="user-name"]').fill('standard_user');
await page.locator('[id="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();

})

    /// Validation what products not contains the "Sauce Labs" text.
await test.step('Product title verification', async () => {
    const titleSauceLabs = await page.locator('.inventory_item_name');
    const ExistSauceLabsText = await titleSauceLabs.allTextContents();

    /// Use the keyword "slice" for confirm text "Sauce Labs"
    for(const item of ExistSauceLabsText) {
await expect(item.slice(0, 10)).toBe('Sauce Labs');

}
})
});