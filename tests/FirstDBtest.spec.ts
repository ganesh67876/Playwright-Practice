import { test, expect } from '@playwright/test';
import { queryDB } from './db.spec';

test('Update order amount and validate DB', async () => {
    await queryDB(`
      CREATE TABLE IF NOT EXISTS orders (
        order_id INT PRIMARY KEY,
        customer_id INT,
        order_amount DECIMAL(10,2)
      )
    `);

    await queryDB('DELETE FROM orders WHERE order_id = 1');
    await queryDB('INSERT INTO orders (order_id, customer_id, order_amount) VALUES (1, 100, 1000)');
    await queryDB('UPDATE orders SET order_amount = 2000 WHERE order_id = 1');
    const result:any = await queryDB('SELECT order_amount FROM orders WHERE order_id = 1');
    const orderAmount = Number(result[0].order_amount);

    expect(orderAmount).toBe(2000);
});