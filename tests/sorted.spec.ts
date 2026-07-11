import { test, expect } from '@playwright/test';

test('Sorting the options', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const allOptions: string[] = (await page.locator('#colors option').allTextContents()).map(text => text.trim());
    const originalOptions: string[] = [...allOptions];
    const sortedOptions: string[] = [...allOptions].sort((a, b) => a.localeCompare(b));

    console.log('Original Options:', originalOptions);
    console.log('Sorted Options:', sortedOptions);

    expect(sortedOptions).toEqual(['Blue', 'Green', 'Green', 'Red', 'Red', 'White', 'Yellow']);
    expect(originalOptions).not.toEqual(sortedOptions);
});