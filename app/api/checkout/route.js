import checkoutQuery from "@/graphql/checkout";
import { NextResponse } from "next/server";


export async function POST(request) {
    const body = await request.json();
    // console.log("Checkout backend Response",body);
    // return NextResponse.json("Yes Get")
    try {
       let res = await checkoutQuery(body)
        // console.log("Checkout backend Response1111111", res)
        return NextResponse.json({msg:"Checkout Successfull", res}, {status: 200})
    } catch (error) {
    return NextResponse.json("Server Internal Error", {status: 500})
    }
}
