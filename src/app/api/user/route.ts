import { requireAuth } from "@/lib/auth";
import { prisma } from "@/lib/prisma"
import { sendResponse } from "@/lib/sendResponse";
import { withErrorHandler } from "@/lib/withErrorHandler";
import { NextRequest, NextResponse } from "next/server"

// export const GET = async(request:Request,{params}:{params:{id:string}})=>{
// // const {searchParams} = new URL(request.url)
// // const name = searchParams.get("name")
// const id = params.id
//     return NextResponse.json({
//         success:true,
//         data:id
//     })
// }

// export const POST = async (request:Request)=>{
// const body = await request.json()

// const result = await prisma.user.create({
//     data:body
// })

// return NextResponse.json({
//     success:true,
//        data:result
// },
 
// )
// }



 const getAllUsers = withErrorHandler(async (req: NextRequest, user: any)=> {
 
    // শুধু authenticated user access করতে পারবে
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true }, // sensitive data avoid
    });
  return sendResponse({
        statusCode:200,
        success:true,
        message: 'users retrative successful',
        data:users
      })
  
}
)

// protected route export
export const GET = requireAuth(getAllUsers);