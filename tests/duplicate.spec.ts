import { test, expect } from '@playwright/test';
import { queryDB } from './db.spec';

test('', async () => {
    const result:any = await queryDB('select customerss.customer_id,count(*) as duplicate_customers from customerss group by customerss.customer_id having count(*) > 1');

    console.log(result);

    expect(result.length).toBe(0);

})