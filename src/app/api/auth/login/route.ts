import { loginUser } from "@/app/services/userService";
import { withErrorHandler } from "@/lib/withErrorHandler";
import { NextRequest, NextResponse } from "next/server";
import { loginSchema } from "./loging.validation";
import { sendResponse } from "@/lib/sendResponse";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  // Validate request body
  const validated = loginSchema.parse(body);

  const user = await loginUser(validated.email, validated.password);

  return sendResponse({
    statusCode:200,
    success:true,
    message: 'Login successful',
    data:user
  })
});