const path = require('path');
class RegistrationPage {
    
    constructor(page) {
        this.page = page;
        this.fullNameInput = page.locator('#fullname');
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#reg-password');
        this.countryDropdown = page.locator('#country');
        this.registerButton = page.locator('#register-btn');
        this.successMessage = page.locator('#registration-success');
        this.resumeUpload = page.locator('#resume');
        this.photoUpload = page.locator('#photo');
        this.bioTextarea = page.locator('#bio');
        this.termsCheckbox = page.locator('#terms-agree');
    }
    
    async goto() {
        await this.page.goto('file://' + path.resolve(__dirname, '../../registration.html'));
        // for using this we need to import the path which is in 1st line above
        // this path line code will work on github actions and also in local comp also.
        // here path.resolve() converts a relative path into an absolute path that works on ANY operating system.


        /*
        await this.page.goto('file:///' + __dirname + '/../../registration.html');
        this path line code is for - when this file is in local comp . but not works on github actions or any ci/cd tool! 
        */
    }
    
    async register(name, email, password, country) {
        await this.fullNameInput.fill(name);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.countryDropdown.selectOption(country);
        await this.registerButton.click();
    }
}

module.exports = RegistrationPage;