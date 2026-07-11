const { test, expect } = require('@playwright/test');
const DashboardPage = require('./pages/DashboardPage');

test('Dashboard shows welcome message and users table', async ({ page }) => {
    
    const dashboardPage = new DashboardPage(page);
    
    await dashboardPage.goto();
    
    await expect(dashboardPage.welcomeMessage).toBeVisible();
    await expect(dashboardPage.usersTable).toBeVisible();
});

test('Dashboard has 3 user rows', async ({ page }) => {
    
    const dashboardPage = new DashboardPage(page);
    
    await dashboardPage.goto();
    
    const rowCount = await dashboardPage.getTableRowCount();
    expect(rowCount).toBe(3);
});