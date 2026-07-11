const { test, expect } = require('@playwright/test');
const testData = require('./data/users.json');
const path = require('path');

testData.forEach(({ username, password, expectedResult }) => {
    
    test(`Login - ${username}`, async ({ page }) => {
        await page.goto('file://' + path.resolve(__dirname, '../login.html'));
        // for using this we need to import the path which is in 1st line above
        // this path line code will work on github actions and also in local comp also.
        // here path.resolve() converts a relative path into an absolute path that works on ANY operating system.


        /*
        await this.page.goto('file:///' + __dirname + '/../../login.html');
        this path line code is for - when this file is in local comp . but not works on github actions or any ci/cd tool!
        */
        await page.locator('#username').fill(username);
        await page.locator('#password').fill(password);
        await page.locator('#login-btn').click();
        
        if (expectedResult === 'success') {
            await expect(page.locator('#success-msg')).toBeVisible();
        } else {
            await expect(page.locator('#error-msg')).toBeVisible();
        }
    });
});