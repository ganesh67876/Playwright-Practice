
import { test, expect } from '@playwright/test';

declare const process: {
    env: {
        API_TOKEN?: string;
    };
};

test('PUT API - update drawer', async ({ request }) => {

    const response = await request.put(
        'https://stgclickscan.terralogic.com/api/v1/drawer/28',
        {
            headers: {
                'x-tenant-id': 'YC8BeJbRwC',
                'Authorization': `Bearer ${process.env.API_TOKEN}`
            },
            data: {
                payload: {
                    name: 'Ganesh66666'
                }
            }
        }
    );

    console.log('STATUS:', response.status());

    const text = await response.text();
    console.log('RESPONSE TEXT:', text);

    expect(response.status()).toBe(404);
});

