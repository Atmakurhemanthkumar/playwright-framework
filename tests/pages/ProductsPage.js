const path =require('path');  
class ProductsPage {
    
    constructor(page) {
        this.page = page;
        this.searchBox = page.locator('#search-box');
        this.searchButton = page.locator('#search-btn');
        this.categoryDropdown = page.locator('#category-filter');
        this.sortDropdown = page.locator('#sort-by');
        this.productsTable = page.locator('#products-table');
        this.cartCount = page.locator('#cart-count');
    }
    
    async goto() {
        await this.page.goto('file://' + path.resolve(__dirname, '../../products.html'));
        // for using this we need to import the path which is in 1st line above
        // this path line code will work on github actions and also in local comp also.
        // here path.resolve() converts a relative path into an absolute path that works on ANY operating system.
        
        /* 
        await this.page.goto('file:///' + __dirname + '/../../products.html');
        this path line code is for - when this file is in local comp . but not works on github actions or any ci/cd tool!
        */
    }
    
    async searchProduct(keyword) {
        await this.searchBox.fill(keyword);
        await this.searchButton.click();
    }
    
    async filterByCategory(category) {
        await this.categoryDropdown.selectOption(category);
    }
    
    async sortBy(option) {
        await this.sortDropdown.selectOption(option);
    }
    
    async addToCart(productName) {
        const row = this.productsTable.locator('tbody tr', { hasText: productName });
        await row.locator('.add-to-cart').click();
    }
    
    async getProductCount() {
        return await this.productsTable.locator('tbody tr').count();
    }
}

module.exports = ProductsPage;