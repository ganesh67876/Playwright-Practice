import { test, expect } from '@playwright/test';

test("create new password", async ({ request }) => {

    // 🔐 Login API
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

    // 🔁 Reset Password API
    const userId = 4;

    const response = await request.patch(
        `https://stgclickscan.terralogic.com/api/v1/user/${userId}/reset-password`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,   // ✅ FIXED
                'x-tenant-id': 'YC8BeJbRwC'
            },
            data: {
                newPassword: "Ganesh1234*#",
                confirmPassword: "Ganesh1234*#"
            }
        }
    );

    const responseBody = await response.json(); // ✅ FIXED

    console.log("Reset Password Response:", responseBody);

    expect(response.status()).toBe(200);
});