const {test, expect} = require('@playwright/test');
/* i am adding this file to gitignore ! becoz this is an example of concept thats why ! so this file will not be in github */
test('Locate elements on login page', async({page}) =>{
    //Go to login page
    /* here : file:///' + __dirname + '/../login.html 
    means :
    1) file:/// : "Don't look on the internet. Open a file from my computer."
    ex: file:///C:/Users/Hemanth/Documents/login.html
    
    2) __dirname : "The folder where the current JavaScript file is located."
    means : ex:  C:\Playwright\tests   (folder only not file)

    3) .. : Go back one folder.
    means : ex:  C:\Playwright\

    4) /login.htlml : Open the login.html file in the folder.

    */
    await page.goto('file:///'+ __dirname + '/../login.html');


    // 1. built-in locators (we dont need to use .locator here for built-in's)
    const username = page.getByPlaceholder('Enter username');
    const password= page.getByPlaceholder('Enter password');
    const loginBtn= page.getByRole('button',{name :'Login'});
    
    /* here : getByRole('button', { name: 'Login' })
    1)getByRole('button') : This tells Playwright:
    "Find all elements whose role is button."
    2) { name: 'Login' } : This tells Playwright:
    "Among all the buttons, choose the one whose accessible name is 'Login'."
    */

    // 2. Css locators (here we use the .locator method)
    /* syntax: 
    we can use : 
    1.#id   2. .class  3. [attribute]
    */
    const errorMsg = page.locator('#error-msg');

    // 3. Xpath locators (here also we use the .locator method)
    /* synatax:
    we can use :
    1. //tagname[@attribute='value']  : it finds tag with attribute
    2. //tagname[text()='value']  : it finds tag with exact text
    3. //tagname[contains(text(),'value')]  : it finds tag with partial text 
    */
    const resetBtn = page.locator('//button[@id="reset-btn"]');


    //verify elements exist,  (expect) is a function used for verification(assertion) 
    await expect(username).toBeVisible();   // toBeBeVisible() : it is an assertion method that checks whether the element is visible or not
    await expect(password).toBeVisible();
    await expect(loginBtn).toBeVisible();
    await expect(errorMsg).toBeHidden(); //toBeHidden()	Element exists in DOM but is hidden (display:none)
    await expect(resetBtn).toBeVisible();
})