import bcrypt from 'bcrypt';
import { AppError } from '@/lib/handleError';
import { prisma } from '@/lib/prisma';
import { signJwt } from '@/lib/jwtHelpers';


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


export const loginUser = async (email: string, password: string) => {
  // Check if user exists
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new AppError('Invalid credentials', 401);
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new AppError('Invalid credentials', 401);
  }

  // Generate JWT token
  const accessToken = signJwt(user)

  return { id: user.id, name: user.name, email: user.email, accessToken };
};