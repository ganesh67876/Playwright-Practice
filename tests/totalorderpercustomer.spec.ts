import {test, expect} from '@playwright/test';
import {queryDB} from './db.spec';

test('Total Order Amount', async({})=>{
      const result:any = await queryDB('select customerss.customer_id, sum(orderss.order_amount) as total_order_amount from customerss join orderss on customerss.customer_id = orderss.customer_id group by customerss.customer_id');
      console.log(result);

      expect(result.length).toBe(1);
      expect(result[0].customer_id).toBe(1);
      expect(Number(result[0].total_order_amount)).toBe(100);
})