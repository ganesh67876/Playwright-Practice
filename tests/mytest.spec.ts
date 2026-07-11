import {test,expect} from "@playwright/test";

// syntax

test("title", async ({page}) =>{
   
    await page.goto("https://www.udemy.com/course/learn-playwright-web-api-testing-with-typescript/learn/lecture/50336331#learning-tools")
    let title:string= await page.title()
    console.log(title)

    await expect(page).toHaveTitle("Log in to continue your learning journey | Udemy")

})