const { test, expect } = require('@playwright/test');
const ProductsPage = require('./pages/ProductsPage');

test('Search for a product', async ({ page }) => {
    
    const productsPage = new ProductsPage(page);
    
    await productsPage.goto();
    await productsPage.searchProduct('Laptop');
    
    const count = await productsPage.getProductCount();
    expect(count).toBeGreaterThan(0);
});

test('Add JavaScript Book to cart', async ({ page }) => {
    
    const productsPage = new ProductsPage(page);
    
    await productsPage.goto();
    await productsPage.addToCart('JavaScript Book');
    
    // Cart count should appear
    await expect(productsPage.cartCount).toBeVisible();
});