import bcrypt from 'bcrypt';
import { AppError } from '@/lib/handleError';
import { prisma } from '@/lib/prisma';


export const registerUser = async (name: string, email: string, password: string) => {
  // Check if user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new AppError('User already exists', 400);
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user in DB
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return { id: user.id, name: user.name, email: user.email };
};
