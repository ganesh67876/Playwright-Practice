import {test,expect,request} from '@playwright/test';

test('GET API - to fetch the user', async ({request}) => {
     const response = await request.get('https://stgclickscan.terralogic.com/api/v1/drawer/19',{
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=utf-8',
            'x-tenant-id' : 'YC8BeJbRwC',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIyLCJlbWFpbCI6Im5pc2NoYWwxMjNAZ21haWwuY28iLCJ1c2VybmFtZSI6Ik5JU0hZIiwicm9sZXMiOlsiQURNSU4iLCJDTElFTlQiXSwidGVuYW50X2lkcyI6WzFdLCJpYXQiOjE3ODAyMDgxNTcsImV4cCI6MTc4MDI1MTM1N30.YgILsqQSsgvC-LKqHcHZZTR_TRaHCueZIE7GgqL93Yo'
        }
     });
     
     expect(response.status()).toBe(200);
        const responseBody = await response.json();
        console.log(responseBody);

        expect(responseBody.payload.id).toBe(19);

});