import { test, expect } from '@playwright/test';
import {queryDB} from './db.spec';

test('Invalid Customer Validation', async({})=>{
    const result:any = await queryDB('select customerss.customer_id, orderss.order_id from customerss left join orderss on customerss.customer_id = orderss.customer_id where customerss.customer_id is null');
    console.log(result);
    expect(result.length).toBe(0);
})