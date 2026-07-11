const { test, expect } = require('@playwright/test');
/* i am adding this file to gitignore ! becoz this is an example of concept thats why ! so this file will not be in github */
test('Dropdown handling on login page', async ({ page }) => {
    
    await page.goto('file:///' + __dirname + '/../login.html');
    
    // Select by value
    await page.locator('#role').selectOption('admin');
    await expect(page.locator('#role')).toHaveValue('admin');
    
    // Select by label
    await page.locator('#role').selectOption({ label: 'Customer' });
    await expect(page.locator('#role')).toHaveValue('customer');
    
    // Select by index
    await page.locator('#role').selectOption({ index: 3 });
    await expect(page.locator('#role')).toHaveValue('vendor');
});

/*
// Select by value attribute
await page.locator('#role').selectOption('admin');

// Select by visible label text
await page.locator('#role').selectOption({ label: 'Admin' });

// Select by index (position — starts at 0)
await page.locator('#role').selectOption({ index: 1 });  // First option after placeholder

*/