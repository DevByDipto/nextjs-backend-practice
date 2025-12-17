/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/handleError.ts
import { NextResponse } from 'next/server';

export class AppError extends Error {
  statusCode: number; 
  constructor(message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const handleError = (err: any) => {
  console.error('Global API Error:', err);
  return NextResponse.json(
    { success:false,
        message: err.message || 'Internal Server Error',
        status:err.statusCode
     },
    { status: err.statusCode || 500 }
  );
};


// lib/withErrorHandler.ts
// import { handleError } from './handleError';



// export const GET = withErrorHandler(async (req: NextRequest) => {
//   const users = await getAllUsers();

//   if (!users) {
//     // Express style throw error
//     throw new AppError('No users found', 404);
//   }

//   return new Response(JSON.stringify({ users }), { status: 200 });
// });