const {test, expect} = require('@playwright/test');
/* i am adding this file to gitignore ! becoz this is an example of concept thats why ! so this file will not be in github */
test('actions test', async ({ page }) => { 

//for login.html    
await page.goto('file:///' + __dirname + '/../login.html');
await page.getByPlaceholder('Enter username').fill('admin');
await page.getByPlaceholder('Enter password').fill('admin123'); 
await page.getByRole('button', { name: 'Login' }).click();

//for registration.html
await page.goto('file:///' + __dirname + '/../registration.html');
//check a checkbox
await page.getByLabel('Sports').check();
// uncheck
await page.getByLabel('Sports').uncheck();
//select a radio button
await page.locator('input[value="male"]').check();
// select an option from dropdown
await page.locator('#country').selectOption('India');


// for dashboard.html
await page.goto('file:///' + __dirname + '/../dashboard.html');
await page.getByRole('button', {name:'Edit'}).first().hover(); // here first() means it clicks the first edit button
await page.getByRole('button', {name:'Edit'}).first().click();

});