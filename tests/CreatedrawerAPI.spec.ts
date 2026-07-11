import { test, expect } from '@playwright/test';

test("Create Drawer API", async ({ request }) => {

    // 1️⃣ LOGIN
    const loginResponse = await request.post(
        "https://stgclickscan.terralogic.com/api/v1/auth/login",
        {
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                username: "Ganesh9898",
                password: "Sai123*#"
            }
        }
    );

    const loginBody = await loginResponse.json();
    const token = loginBody?.accessToken;

    console.log("Login Status:", loginResponse.status());
    console.log("Token:", token);

    expect(token).toBeTruthy();

    // 2️⃣ UNIQUE DRAWER NAME (fixes 409 error)
    const uniqueId = Date.now();

    const requestBody = {
        name: `GANESHHHH_${uniqueId}`,
        description: "",
        database_id: 1,
        isDelete: false,
        image_path: "teststagenew",
        fields: [
            {
                name: "First_Name",
                format_id: 1,
                width: 44,
                redflag: [],
                lists: [],
                radio_buttons: []
            },
            {
                name: "Last_Name",
                format_id: 1,
                width: 45,
                redflag: [],
                lists: [],
                radio_buttons: []
            }
        ]
    };

    // 3️⃣ CREATE DRAWER
    const response = await request.post(
        "https://stgclickscan.terralogic.com/api/v1/drawer",
        {
            headers: {
                'Content-Type': 'application/json',
                'X-Tenant-Id': 'YC8BeJbRwC',
                'Authorization': `Bearer ${token}`
            },
            data: requestBody
        }
    );

    const responseBody = await response.json();

    console.log("Create Drawer Status:", response.status());
    console.log("Create Drawer Response:", responseBody);

    // 4️⃣ ASSERTIONS
    expect(response.status()).toBe(201);

expect(responseBody).toHaveProperty("message");
expect(responseBody).toHaveProperty("statusCode");

expect(responseBody.payload).toHaveProperty("name");
expect(responseBody.payload).toHaveProperty("database_id");
expect(responseBody.payload).toHaveProperty("fields");
});