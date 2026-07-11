import { test, expect } from '@playwright/test';
import { createConnection } from 'mysql2/promise';

export async function queryDB(query: string) {
  const connection = await createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sai123*#',
    database: 'sample'
  });

  const [rows] = await (connection as any).execute(query);
  await connection.end();
  return rows as any;
}

test.describe('Database connectivity', () => {
  test('should execute a simple query', async () => {
    const rows = await queryDB('SELECT 1 AS value');
    expect(rows).toBeTruthy();
    expect(Array.isArray(rows)).toBe(true);
    expect((rows as Array<any>)[0].value).toBe(1);
  });
});