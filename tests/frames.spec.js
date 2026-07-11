const { test, expect } = require('@playwright/test');
/* i am adding this file to gitignore ! becoz this is an example of concept thats why ! so this file will not be in github */
test('Interact with Terms iframe on login page', async ({ page }) => {
    
    await page.goto('file:///' + __dirname + '/../login.html');
    
/* 
FRAME: Elements inside an iframe are in a separate DOM. Playwright can't find them directly — you must switch into the frame first.

// ❌ This FAILS — element is inside iframe
await page.locator('#accept-terms').check();

// ✅ Switch to frame first, then act
const frame = page.frameLocator('#terms-frame');
await frame.locator('#accept-terms').check();

Methods:
Method	Use
page.frameLocator('iframe-selector')	Find frame by CSS/XPath — then locate elements inside
page.frames()	                        Get ALL frames on page (returns array)
page.frame({ name: '...' })	            Find frame by name attribute

*/



    // Switch into iframe
    const termsFrame = page.frameLocator('#terms-frame');
    
    // Check the accept checkbox inside iframe
    await termsFrame.locator('#accept-terms').check();
    
    // Click Continue button inside iframe
    await termsFrame.locator('#continue-btn').click();
    
    // Verify status text inside iframe
    await expect(termsFrame.locator('#terms-status')).toHaveText('✅ Terms Accepted');
});