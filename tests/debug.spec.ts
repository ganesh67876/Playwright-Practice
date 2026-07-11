import {test, expect, request} from '@playwright/test';

test('PUT API - update drawer', async ({request}) => {

const response = await request.put(
    'https://stgclickscan.terralogic.com/api/v1/drawer/28',
    {
        headers: {
            'x-tenant-id': 'YC8BeJbRwC',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIyLCJlbWFpbCI6Im5pc2NoYWwxMjNAZ21haWwuY28iLCJ1c2VybmFtZSI6Ik5JU0hZIiwicm9sZXMiOlsiQURNSU4iLCJDTElFTlQiXSwidGVuYW50X2lkcyI6WzFdLCJpYXQiOjE3ODAyODEyMzAsImV4cCI6MTc4MDMyNDQzMH0.POGaghwmEL_Vzw4BApnjkuFGsX8l8wgKauNGOV3ZNo8'
        },
        json: {
            payload: {
                name: "Ganesh66666"
            }
        }
    }
);

console.log("STATUS:", response.status());

const text = await response.text();
console.log("RESPONSE TEXT:", text);

});