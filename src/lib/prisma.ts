
// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL,
// })

import { PrismaClient } from "@/generated/prisma/client";

export const prisma = new PrismaClient();