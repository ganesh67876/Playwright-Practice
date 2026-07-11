import { test, expect } from '@playwright/test';
import {queryDB} from './db.spec';

test('NOT NULL Validation', async({})=>{
    const result:any = await queryDB('select customerss.customer_id, orderss.order_id from customerss join orderss on customerss.customer_id = orderss.customer_id where customerss.customer_id is null or orderss.order_id is null');
    console.log(result);
    expect(result.length).toBe(0);
})