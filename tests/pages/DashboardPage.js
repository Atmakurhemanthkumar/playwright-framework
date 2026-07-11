const path =require('path');
class DashboardPage {
    
    constructor(page) {
        this.page = page;
        this.welcomeMessage = page.locator('#welcome-msg');
        this.usersTable = page.locator('#users-table');
        this.logoutButton = page.locator('#logout-btn');
        this.downloadReportButton = page.locator('#download-report');
        this.productsLink = page.locator('#products-link');
        this.editButtons = page.locator('.edit-btn');
    }
    
    async goto() {
         await this.page.goto('file://' + path.resolve(__dirname, '../../dashboard.html'));
        // for using this we need to import the path which is in 1st line above
        // this path line code will work on github actions and also in local comp also.
        // here path.resolve() converts a relative path into an absolute path that works on ANY operating system.

        /*  
        await this.page.goto('file:///' + __dirname + '/../../dashboard.html');
        this path line code is for - when this file is in local comp . but not works on github actions or any ci/cd tool!
        */
       
    }
    
    async clickLogout() {
        await this.logoutButton.click();
    }
    
    async getWelcomeText() {
        return await this.welcomeMessage.textContent();
    }
    
    async getTableRowCount() {
        return await this.usersTable.locator('tbody tr').count();
    }
    
    async clickEditForUser(userName) {
        const row = this.usersTable.locator('tbody tr', { hasText: userName });
        await row.locator('.edit-btn').click();
    }
}

module.exports = DashboardPage;