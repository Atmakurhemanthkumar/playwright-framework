const { test, expect } = require('@playwright/test');
const RegistrationPage = require('./pages/RegistrationPage');

test('Register a new user', async ({ page }) => {
    
    const registrationPage = new RegistrationPage(page);
    
    await registrationPage.goto();
    await registrationPage.register('Hemant', 'hemant@test.com', 'password123', 'india');
    
    await expect(registrationPage.successMessage).toBeVisible();
});