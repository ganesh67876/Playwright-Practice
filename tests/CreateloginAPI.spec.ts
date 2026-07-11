import {test,expect} from '@playwright/test';

test("create test API",async({request})=>{
     
    const requestbody = await request.post("https://clickscan.terralogic.com/client/api/v1/auth/login",
        {
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            data : {
                "username":"GYSG","password":"Sai123*#"
            }
        }
    )

    const responce = await requestbody.json();
    console.log(responce)


    expect(responce).toHaveAttribute("GYSG");
})