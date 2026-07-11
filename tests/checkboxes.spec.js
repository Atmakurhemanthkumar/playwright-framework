const { test, expect } = require('@playwright/test');
/* i am adding this file to gitignore ! becoz this is an example of concept thats why ! so this file will not be in github */
test('Checkbox handling', async ({ page }) => {
    
    await page.goto('file:///' + __dirname + '/../login.html');
    
    // Initially unchecked
    await expect(page.locator('#remember')).not.toBeChecked();
    
    // Check it
    await page.locator('#remember').check();
    await expect(page.locator('#remember')).toBeChecked();
    
    // Uncheck it
    await page.locator('#remember').uncheck();
    await expect(page.locator('#remember')).not.toBeChecked();
});