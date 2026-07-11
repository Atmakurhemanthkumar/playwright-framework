const { test, expect } = require('@playwright/test');
/* i am adding this file to gitignore ! becoz this is an example of concept thats why ! so this file will not be in github */
test('Waits example - Login flow', async ({ page }) => {
    
    await page.goto('file:///' + __dirname + '/../login.html');
    
    // Auto-wait handles these (no code needed)
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Explicit wait for success message
    await page.waitForSelector('#success-msg');
    await expect(page.locator('#success-msg')).toBeVisible();
    
    // Wait for redirect to dashboard
    await page.waitForURL('**/dashboard.html');
    await expect(page).toHaveTitle('MyStore - Dashboard');
});