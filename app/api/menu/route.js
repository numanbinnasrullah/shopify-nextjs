import menuQuery from "@/graphql/menu";
import { NextResponse } from "next/server";

export async function GET() {
    // console.log("GET Users Backend Request")
    try {
        const res = await menuQuery()
        // console.log("Menu ka data a gea", res)
        return NextResponse.json({res})
        // return NextResponse.json({ error: "Please Login First" }, { status: 200 }, {"data": data});
    } catch (error) {
        return NextResponse.json("Server Internal Error", {status: 500})
    }
}
