const { test, expect } = require('@playwright/test');
const products = require('./data/products.json'); // import the json file from data folder and store in variable
const path = require('path');

products.forEach(({ productName, expectedPrice }) => {
    /* 
    forEach is used for only array elements , if we have only objects means - { "productName": "Laptop Pro", "expectedPrice": "$999" }
    then it doesnt work so we embed with [] which refers to arrays so :-
    [{ "productName": "Laptop Pro", "expectedPrice": "$999" },{ "productName": "Laptop Pro", "expectedPrice": "$999" }].
    by this forEach works as by giving the outputs as values(laptop Pro) not keys(username) .
    */
    
    test(`Verify price for ${productName}`, async ({ page }) => {
        await page.goto('file://' + path.resolve(__dirname, '../products.html'));
        // for using this we need to import the path which is in 1st line above
        // this path line code will work on github actions and also in local comp also.
        // here path.resolve() converts a relative path into an absolute path that works on ANY operating system.


         /* 
        await this.page.goto('file:///' + __dirname + '/../../products.html');
        this path line code is for - when this file is in local comp . but not works on github actions or any ci/cd tool!
        */
        
        const row = page.locator('#products-table tbody tr', { hasText: productName });
        const priceCell = row.locator('.price');
        
        await expect(priceCell).toHaveText(expectedPrice); // checks the expected price is same or not!
    });
});