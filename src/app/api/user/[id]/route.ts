import { NextResponse } from "next/server"

export const GET = async(request:Request,{params}:{params:{id:string}})=>{
// const {searchParams} = new URL(request.url)
// const name = searchParams.get("name")
const {id} = await params
console.log("id",id);

    return NextResponse.json({
        success:true,
        data:id
    })
}

export const POST = async (request:Request,{params}:{params:{id:string}})=>{
const body = await request.json()
const {id} = await params
console.log("id",id);

return NextResponse.json({
    success:true,
        userId:id,
        data:body
},
  { status: 300 }
)
}