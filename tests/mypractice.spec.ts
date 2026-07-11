import {test,expect,Locator} from '@playwright/test';

test("Verify My Practice",async({page})=>{  
     
     await page.goto("https://testautomationpractice.blogspot.com/")
     const keyReferenceCheckbox = page.locator("//input[@type='checkbox' and contains(@class,'form')]");

const count = await keyReferenceCheckbox.count();

/* for (let i = 0; i < count; i++) {
    const checkbox = keyReferenceCheckbox.nth(i);

    if (await checkbox.isChecked()) {
        await checkbox.uncheck();
    } else {
        await checkbox.check();
    }
} */
 for (let i = 0; i < count; i++) {

    // ✅ target only 1st (0) and 4th (3)
    if (i === 0 || i === 3) {
        const checkbox = keyReferenceCheckbox.nth(i);

        if (await checkbox.isEnabled()) {
            await checkbox.check();
        }

        await expect(checkbox).toBeChecked();
    }
}

await page.waitForTimeout(70000);
    
});