import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

// export const db = globalThis.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
export const db = new PrismaClient();

// we're not just doing export default db = new PrismaClient() because it would crash in dev mode because of hot reload
