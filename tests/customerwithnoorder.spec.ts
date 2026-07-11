import {test, expect} from '@playwright/test';
import {queryDB} from './db.spec';

test('Identify customers with no orders', async({})=>{
      const result:any = await queryDB('select customerss.customer_id, orderss.order_id from customerss left join orderss on customerss.customer_id = orderss.customer_id where orderss.order_id is null');
      console.log(result);

      expect(result.length).toBe(0);
})