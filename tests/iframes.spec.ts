/*import {test, expect, Locator} from "@playwright/test";

test('Iframes', async({page})=>{

     await page.goto('https://ui.vision/demo/webtest/frames/')

       // Approach 1 -- using page.frame
    
     /*const frame = page.frame({url:/frame_1\.html/})

     if(frame){
        await frame.locator("[name='mytext1']").fill("Hello")
        // await frame.fill("input[name='mytext1']","Sai Ganesh")

     }
     else{
        console.log("frame is unavailable")
     }*/


        // Approach 2: using frameLocator
   /* const frameLocator = page.frameLocator('[src="frame_1.html"]').locator("[name='mytext1']")
    frameLocator.fill("Ganesh")

    await page.waitForTimeout(5000)

})*/

import {test, expect, Locator} from "@Playwright/test"


test("frames", async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");
        const frames = page.locator("frame")
        const count = await frames.count()
        console.log(count)

        for (let i = 0; i < count; i++) {

            const src = await frames.nth(i).getAttribute("src");

            if (src === "frame_1.html") {

                 const textbox = page.frameLocator('frame[src="frame_1.html"]').locator("[name='mytext1']")
                 await textbox.fill("Ganesh")
                 
                 await expect(textbox).toHaveValue("Ganesh")
            }
            else if (src === "frame_2.html") {
                const textbox = page.frameLocator('frame[src="frame_2.html"]').locator("[name='mytext2']")
                await textbox.fill("Sai")
            
                await expect(textbox).toHaveValue("Sai")
            }
            else if (src === "frame_3.html") {
                const textbox = page.frameLocator('frame[src="frame_3.html"]').locator("[name='mytext3']")
                await textbox.fill("Yoga")
                await expect(textbox).toHaveValue("Yoga")
            }
            else if (src === "frame_4.html") {
                const textbox = page.frameLocator('frame[src="frame_4.html"]').locator("[name='mytext4']")
                await textbox.fill("Gerigi")
                console.log(textbox)
                await expect(textbox).toHaveValue("Gerigi")
            }
            else if (src === "frame_5.html") {
                const textbox = page.frameLocator('frame[src="frame_5.html"]').locator("[name='mytext5']")
                await textbox.fill("SSSS")
                await expect(textbox).toHaveValue("SSSS")
            }
            
    }

    
});