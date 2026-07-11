const {test,expect} = require('@playwright/test');
/* i am adding this file to gitignore ! becoz this is an example of concept thats why ! so this file will not be in github */
test('assertion', async({page})=>{
await page.goto('file:///'+ __dirname +'/../login.html');

// Page assertions
await expect(page).toHaveTitle('MyStore - Login');

// Visibility
await expect(page.getByPlaceholder('Enter username')).toBeVisible();
await expect(page.locator('#error-msg')).toBeHidden();

// Text
await expect(page.getByRole('heading', { name: 'Login' })).toHaveText('Login');

// Value
await page.getByPlaceholder('Enter username').fill('admin');
await expect(page.getByPlaceholder('Enter username')).toHaveValue('admin');

// State
await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
await page.locator('#remember').check();
await expect(page.locator('#remember')).toBeChecked();

});
