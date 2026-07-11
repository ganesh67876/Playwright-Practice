import {test, expect} from '@playwright/test';
import { queryDB } from './db.spec';

test('Check Data Exists', async () => {
    await queryDB(`
      CREATE TABLE IF NOT EXISTS customerss (
        customer_id INT PRIMARY KEY,
        name VARCHAR(100)
      )
    `);

    await queryDB(`
      CREATE TABLE IF NOT EXISTS orderss (
        order_id INT PRIMARY KEY,
        customer_id INT,
        order_amount DECIMAL(10,2)
      )
    `);

    await queryDB('DELETE FROM orderss WHERE order_id = 1');
    await queryDB('DELETE FROM customerss WHERE customer_id = 1');

    await queryDB('INSERT INTO customerss (customer_id, name) VALUES (1, "Test Customer")');
    await queryDB('INSERT INTO orderss (order_id, customer_id, order_amount) VALUES (1, 1, 100.00)');

    const result:any = await queryDB('select customerss.customer_id, orderss.order_id from customerss join orderss on customerss.customer_id = orderss.customer_id');

    console.log(result);

    expect(result.length).toBeGreaterThan(0);
});