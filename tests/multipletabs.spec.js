const { test, expect } = require('@playwright/test');
/* i am adding this file to gitignore ! becoz this is an example of concept thats why ! so this file will not be in github */
test('Handle new tab from login page', async ({ page, context }) => {
    
    await page.goto('file:///' + __dirname + '/../login.html');
    
    // Catch the new tab that opens when clicking the link
    const [dashboardTab] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#dashboard-link').click()
    ]);
    
    // Now switch to new tab
    await dashboardTab.bringToFront();
    await dashboardTab.waitForLoadState();
    
    // Verify you're on dashboard
    await expect(dashboardTab.locator('#welcome-msg')).toBeVisible();
    await expect(dashboardTab).toHaveTitle('MyStore - Dashboard');
    
    // Close new tab
    await dashboardTab.close();
    
    // Back to original login tab — still works!
    await expect(page.locator('#username')).toBeVisible();
});