const { test, expect } = require('@playwright/test');
const LoginPage = require('./pages/LoginPage');  
// importing the LoginPage.js which is exported for having needed locators, passwords, navigation , etc..for reuse for many files

test('Login with valid credentials', async ({ page }) => {
    
    const loginPage = new LoginPage(page);  
// new is keyword to create object for constructor(page) , so page inside constructor is connected to this LoginPage(page). 

// we need to use loginPage definitely for calling other methods from .js file
    await loginPage.goto();  // calling navigation
    await loginPage.login('admin', 'admin123'); // giving parameters for login without writing locators, actions..
    
    // successMessage is a property, not a method — no ()
    await expect(loginPage.successMessage).toBeVisible();
});

test('Login with empty fields shows error', async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.loginButton.click();
    
    await expect(loginPage.errorMessage).toBeVisible();
});