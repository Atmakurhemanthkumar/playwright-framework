const { test: base, expect } = require('@playwright/test');
const path = require('path');
const test = base.extend({
    
    loggedInPage: async ({ page }, use) => {
        await page.goto('file://' + path.resolve(__dirname, '../login.html'));
        // for using this we need to import the path which is in 1st line above
        // this path line code will work on github actions and also in local comp also.
        // here path.resolve() converts a relative path into an absolute path that works on ANY operating system.

        /*
        await this.page.goto('file:///' + __dirname + '/../../login.html');
        this path line code is for - when this file is in local comp . but not works on github actions or any ci/cd tool!
        */

        await page.locator('#username').fill('admin');
        await page.locator('#password').fill('admin123');
        await page.locator('#login-btn').click();
        await page.waitForURL('**/dashboard.html');
        await use(page);
    },
    
    testUser: async ({ }, use) => {
        const user = { username: 'admin', password: 'admin123' };
        await use(user);
    }
});

module.exports = { test, expect };