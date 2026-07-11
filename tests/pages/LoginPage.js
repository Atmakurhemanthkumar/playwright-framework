const path =require('path');  
class LoginPage {
    
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-btn');
        this.rememberCheckbox = page.locator('#remember');
        this.roleDropdown = page.locator('#role');
        this.errorMessage = page.locator('#error-msg');
        this.successMessage = page.locator('#success-msg');
    }
    
    async goto() {
        await this.page.goto('file://' + path.resolve(__dirname, '../../login.html'));
        // for using this we need to import the path which is in 1st line above
        // this path line code will work on github actions and also in local comp also.
        // here path.resolve() converts a relative path into an absolute path that works on ANY operating system.


        /*
        await this.page.goto('file:///' + __dirname + '/../../login.html');
        this path line code is for - when this file is in local comp . but not works on github actions or any ci/cd tool!
        */
    }
    
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

module.exports = LoginPage;

// use this code's methods  in login-test.spec.js