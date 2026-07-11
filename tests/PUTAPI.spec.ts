import {test, expect, request} from '@playwright/test';

test('PUT API - update drawer', async ({request}) => {
         const response = await request.put(
        'https://stgclickscan.terralogic.com/api/v1/drawer/28',
        {
            headers: {
                'Content-Type': 'application/json',
                'x-tenant-id': 'YC8BeJbRwC',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIyLCJlbWFpbCI6Im5pc2NoYWwxMjNAZ21haWwuY28iLCJ1c2VybmFtZSI6Ik5JU0hZIiwicm9sZXMiOlsiQURNSU4iLCJDTElFTlQiXSwidGVuYW50X2lkcyI6WzFdLCJpYXQiOjE3ODAyODEyMzAsImV4cCI6MTc4MDMyNDQzMH0.POGaghwmEL_Vzw4BApnjkuFGsX8l8wgKauNGOV3ZNo8'
            },
            data:{
                name: "Ganesh6666666",
                database_id: 1,
                fields: [
                    { name: "First_Name", format_id: 1, width: 45, redflag: [], lists: [], radio_buttons: [], checkboxes: [] },
                    { name: "Last_Name", format_id: 1, width: 45, redflag: [], lists: [], radio_buttons: [], checkboxes: [] },
                    { name:"Middle_Name", format_id: 1, width: 45, redflag: [], lists: [], radio_buttons: [], checkboxes: [] }
                ]
            }
        }
    );

    const responseText = await response.text();
console.log("STATUS:", response.status());
console.log("RESPONSE:", responseText);  
    console.log(responseText);

    expect(response.status()).toBe(200);
    expect(JSON.parse(responseText).message).toBe("Update drawer successful");
});