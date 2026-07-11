const {test, expect} = require('@playwright/test');
/* i am adding this file to gitignore ! becoz this is an example of concept thats why ! so this file will not be in github */
test('Q5', async ({ page }) => {
    await page.goto('file:///' + __dirname + '/../registration.html');
    
    // Upload files
    await page.locator('#resume').setInputFiles('./resume.pdf');
    await page.locator('#photo').setInputFiles('./photo.jpg');
    
    // Verify files selected (not empty)
    await expect(page.locator('#resume')).not.toHaveValue('');
    await expect(page.locator('#photo')).not.toHaveValue('');
    
    // Fill form
    await page.locator('#fullname').fill('Hemant');
    await page.locator('#register-btn').click();
    
    // Verify success
    await expect(page.locator('#registration-success')).toBeVisible();
});

/*
// Single file
await page.locator('#resume').setInputFiles('path/to/file.pdf');

// Multiple files
await page.locator('#resume').setInputFiles(['file1.pdf', 'file2.pdf']);

// No file (clear selection)
await page.locator('#resume').setInputFiles([]);

File Download — Two Methods
Method 1: Click and Wait for Download
javascript
// Start waiting for download BEFORE clicking
const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#download-report').click()
]);

// Save the file
await download.saveAs('path/to/save/report.pdf');

// OR just get the filename
console.log(download.suggestedFilename());

// Verify file selected (input has value)
    const resumeValue = await page.locator('#resume').inputValue();
    console.log('Selected file:', resumeValue);

    or to veirfy:
    // ✅ Way 1: Check value is not empty
await expect(page.locator('#resume')).not.toHaveValue('');

// ✅ Way 2: Check value contains filename
await expect(page.locator('#resume')).toContainText('resume.pdf');

*/