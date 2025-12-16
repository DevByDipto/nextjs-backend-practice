import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async(request:Request,{params}:{params:{id:string}})=>{
// const {searchParams} = new URL(request.url)
// const name = searchParams.get("name")
const id = params.id
    return NextResponse.json({
        success:true,
        data:id
    })
}

export const POST = async (request:Request)=>{
const body = await request.json()

const result = await prisma.user.create({
    data:body
})

return NextResponse.json({
    success:true,
       data:result
},
 
)
}