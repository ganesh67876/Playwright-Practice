import { test, expect } from '@playwright/test';

/* test('Login API - valid user', async ({ request }) => {
  const response = await request.post('https://clickscan.terralogic.com/client/api/v1/auth/login', {
    data: {
      username: 'Gysg',
      password: 'Sai123*#'
    }
  });

  // ✅ Based on your screenshot
  expect(response.status()).toBe(201);

  // ✅ Check content type before parsing
  const contentType = response.headers()['content-type'];

  if (contentType && contentType.includes('application/json')) {
    const body = await response.json();
    console.log('Response Body:', body);

    // ✅ Validate response (adjust if needed)
    expect(body).toBeTruthy();

    // If token exists:
    // expect(body).toHaveProperty('token');

  } else {
    const text = await response.text();
    console.log('Non-JSON Response:', text);

    throw new Error('Still getting HTML → Check API URL in Network tab (Copy as cURL)');
  }
}); */


/* test('Search Folder API', async ({ request }) => {
  const token = 'YOUR_ACCESS_TOKEN';

  const response = await request.get(
    'https://clickscan.terralogic.com/api/v1/folder/search-full',
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'x-tenant-id': '7'   // 👈 ADD THIS
      },
      data: {
        search: ""
      }
    }
  );

  console.log(await response.text());
  expect(response.status()).toBe(200);
}); */

test('Create User API with Login', async ({ request }) => {

  // 🔐 Step 1: Login
  const loginResponse = await request.post(
    'https://stgclickscan.terralogic.com/api/v1/auth/login',
    {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      data: {
        username: 'Ganesh9898',
        password: 'Sai123*#'
      }
    }
  );

  const loginBody = await loginResponse.json();
  const token = loginBody?.accessToken;

  console.log("Login Status:", loginResponse.status());
  console.log("Token:", token);

  expect(loginResponse.status()).toBe(201);
  expect(token).toBeTruthy();

  // 🧾 Step 2: Create User
  const uniqueId = Date.now().toString().slice(-6); // last 6 digits

const requestBody = {
  email: `ganesh${uniqueId}@gmail.com`,
  username: `GAN${uniqueId}`, // ✅ max ~9 chars
  description: "No description",
  role_id: [3],
  database_id: [1]
};

  const response = await request.post(
    'https://stgclickscan.terralogic.com/api/v1/user',
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'x-tenant-id': 'YC8BeJbRwC' // ⚠️ IMPORTANT
      },
      data: requestBody
    }
  );

  const responseBody = await response.json();

  console.log("Create User Status:", response.status());
  console.log("Create User Response:", responseBody);

  // ✅ Assertions
  expect(response.status()).toBe(200); // actual HTTP status
  expect(responseBody.statusCode).toBe(201); // API logical status
  expect(responseBody.payload).toHaveProperty('id');
  expect(responseBody.payload).toHaveProperty('email');
});

test('Create New Folder (Upload Folder API)', async ({ request }) => {

  // 🔐 Step 1: Login
  const loginResponse = await request.post(
    'https://stgclickscan.terralogic.com/api/v1/auth/login',
    {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      data: {
        username: 'Ganesh9898',
        password: 'Sai123*#'
      }
    }
  );

  const loginBody = await loginResponse.json();
  const token = loginBody?.accessToken;

  console.log("Login Status:", loginResponse.status());
  expect(loginResponse.status()).toBe(201);
  expect(token).toBeTruthy();

  // 📁 Step 2: Create a Drawer (to ensure we have a valid drawer_id for the folder)
  const uniqueId = Date.now().toString().slice(-6); // last 6 digits
  const drawerName = `DrawerForFolder_${uniqueId}`;
  
  const drawerResponse = await request.post(
      "https://stgclickscan.terralogic.com/api/v1/drawer",
      {
          headers: {
              'Content-Type': 'application/json',
              'X-Tenant-Id': 'YC8BeJbRwC',
              'Authorization': `Bearer ${token}`
          },
          data: {
              name: drawerName,
              description: "",
              database_id: 1,
              isDelete: false,
              image_path: "teststagenew",
              fields: [
                  { name: "First_Name", format_id: 1, width: 44, redflag: [], lists: [], radio_buttons: [] },
                  { name: "Last_Name", format_id: 1, width: 45, redflag: [], lists: [], radio_buttons: [] }
              ]
          }
      }
  );
  
  const drawerBody = await drawerResponse.json();
  console.log("Drawer Creation Response:", JSON.stringify(drawerBody, null, 2));
  // The ID might be in a different property
  const drawerId = drawerBody.payload?.id || drawerBody.payload?.drawer_id || drawerBody.payload?.drawerId;
  
  console.log("Extracted Drawer ID:", drawerId);

  // 📂 Step 3: Create Folder
  const folderName = `TestFolder_${uniqueId}`;

  const requestBody = {
    name: folderName,
    description: "Folder created via API test",
    database_id: 1, // Adjust if needed
    drawer_id: drawerId, // ✅ Use the dynamically created drawer_id
    fields: [
      {
        name: "First_Name", // Must match the drawer's fields
        value: "John"
      },
      {
        name: "Last_Name", // Must match the drawer's fields
        value: "Doe"
      }
    ]
  };

  const response = await request.post(
    'https://stgclickscan.terralogic.com/api/v1/folder',
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'x-tenant-id': 'YC8BeJbRwC' // ⚠️ IMPORTANT
      },
      data: requestBody
    }
  );

  const responseText = await response.text();
  let responseBody;
  try {
    responseBody = JSON.parse(responseText);
  } catch (e) {
    responseBody = responseText;
  }

  console.log("Create Folder Status:", response.status());
  console.log("Create Folder Response:", responseBody);

  // ✅ Assertions (Adjust expectations based on actual API response)
  expect(response.status()).toBe(201); // or 200 depending on actual status
  expect(responseBody?.payload).toHaveProperty('name', folderName);
  
  /* 
  // 📝 NOTE: If the "upload folder" feature actually requires sending files via multipart/form-data, 
  // you can use the following approach instead:
  
  // const uploadResponse = await request.post(
  //   'https://stgclickscan.terralogic.com/api/v1/folder/upload', // adjust to correct endpoint
  //   {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'x-tenant-id': 'YC8BeJbRwC'
  //     },
  //     multipart: {
  //       file: {
  //         name: 'sample.txt',
  //         mimeType: 'text/plain',
  //         buffer: Buffer.from('dummy file content')
  //       },
  //       folder_name: folderName
  //     }
  //   }
  // );
  */
});
