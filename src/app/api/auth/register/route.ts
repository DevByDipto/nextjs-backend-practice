import { NextRequest, NextResponse } from 'next/server';
import { withErrorHandler } from '@/lib/withErrorHandler';
import { registerUser } from '@/app/services/userService';
import { registerSchema } from './register.validation';



export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  // Validate request body
  const validated = registerSchema.parse(body);

  const user = await registerUser(validated.name, validated.email, validated.password);

  return NextResponse.json({ message: 'User registered successfully', user });
});
