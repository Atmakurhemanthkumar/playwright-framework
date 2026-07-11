const { test, expect } = require('@playwright/test');
/* i am adding this file to gitignore ! becoz this is an example of concept thats why ! so this file will not be in github */
test('Read users table', async ({ page }) => {
    
    await page.goto('file:///' + __dirname + '/../dashboard.html');
    
    // Get all rows
    const rows = page.locator('#users-table tbody tr');
    await expect(rows).toHaveCount(3);
    
    // Get first user's name
    const firstName = rows.nth(0).locator('td').nth(0);
    await expect(firstName).toHaveText('John Doe');
    
    // Get first user's email
    const firstEmail = rows.nth(0).locator('td').nth(1);
    await expect(firstEmail).toHaveText('john@test.com');
    
    // Get first user's status
    const firstStatus = rows.nth(0).locator('.status-active');
    await expect(firstStatus).toHaveText('Active');
});

/*

Common Operations
1. Get All Rows
const rows = page.locator('#users-table tbody tr');
console.log(await rows.count());  // 3

2. Get Specific Row
const firstRow = page.locator('#users-table tbody tr').nth(0);
console.log(await firstRow.textContent());  // John Doe john@test.com Admin Active Edit

3. Get Specific Cell
// Row 1, Column 1 (Name)
const name = page.locator('#users-table tbody tr').nth(0).locator('td').nth(0);
console.log(await name.textContent());  // John Doe

4. Get All Values in a Column
// All Names (first column)
const names = page.locator('#users-table tbody tr td:nth-child(1)');
console.log(await names.count());  // 3
console.log(await names.nth(1).textContent());  // Jane Smith

5. Find Row by Cell Value
// Find row containing "Jane Smith"
const row = page.locator('#users-table tbody tr', { hasText: 'Jane Smith' });
await row.locator('.edit-btn').click();

*/