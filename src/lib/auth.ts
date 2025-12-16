/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/auth.ts
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function authenticate(req: NextRequest) {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    return decoded; // return user info
  } catch {
    return null;
  }
}

export function requireAuth(handler: (req: NextRequest, user: any) => Promise<NextResponse>) {
  return async function(req: NextRequest) {
    const user = await authenticate(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    return handler(req, user);
  };
}



// 
// import { NextRequest, NextResponse } from "next/server";
// import { requireAuth } from "@/lib/auth";
// import prisma from "@/lib/prismadb"; // ধরে নিই prisma client setup আছে

// async function getAllUsers(req: NextRequest, user: any) {
//   try {
//     // শুধু authenticated user access করতে পারবে
//     const users = await prisma.user.findMany({
//       select: { id: true, name: true, email: true }, // sensitive data avoid
//     });
//     return NextResponse.json({ users });
//   } catch (err) {
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//   }
// }

// // protected route export
// export const GET = requireAuth(getAllUsers);

// 