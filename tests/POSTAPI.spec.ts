import { test, expect,request } from '@playwright/test';

test('POST API - create drawer', async ({ request }) => {


    const response = await request.post(
        'https://stgclickscan.terralogic.com/api/v1/drawer',
        {
            headers: {
                'Content-Type': 'application/json',
                'x-tenant-id': 'YC8BeJbRwC',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIyLCJlbWFpbCI6Im5pc2NoYWwxMjNAZ21haWwuY28iLCJ1c2VybmFtZSI6Ik5JU0hZIiwicm9sZXMiOlsiQURNSU4iLCJDTElFTlQiXSwidGVuYW50X2lkcyI6WzFdLCJpYXQiOjE3ODAyMTA1MzcsImV4cCI6MTc4MDI1MzczN30.C-deTAos9D9SNdoKC2LzhZI-tMmlqdLiMyfRvjPN3Zc'
            },
            data: {
                name: "Ganesh666",
                description: "",
                database_id: 1,
                isDelete: false,
                image_path: "teststagenew",
                fields: [
                    { name: "First_Name", format_id: 1, width: 44, redflag: [], lists: [], radio_buttons: [], checkboxes: [] },
                    { name: "Last_Name", format_id: 1, width: 44, redflag: [], lists: [], radio_buttons: [], checkboxes: [] }
                ]
            }
        }
    );

    const responseBody = await response.json();

    console.log("STATUS:", response.status());

    expect(response.status()).toBe(201);
    expect(responseBody.payload.name).toBe("Ganesh666");

});