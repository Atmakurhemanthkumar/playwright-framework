const { test, expect } = require('@playwright/test');
const ProductsPage = require('./pages/ProductsPage');

test('Search for a product', async ({ page }) => {
    
    const productsPage = new ProductsPage(page);
    
    await productsPage.goto();
    await productsPage.searchProduct('Laptop');
    
    const count = await productsPage.getProductCount();
    expect(count).toBeGreaterThan(0);
});
