'use server';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function checkAdminPassword(password: string): Promise<boolean> {
  return password === ADMIN_PASSWORD;
}
