import { test, expect } from '@playwright/test';

test('finding duplicate options', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
 
    const allOptions: string[] = (await page.locator('#colors option').allTextContents()).map(text => text.trim());
    console.log('Original Options:', allOptions);

});