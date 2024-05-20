import homePageQuery from "@/graphql/homepage";
import { NextResponse } from "next/server";

export async function GET() {
    // console.log("GET Users Backend Request")
    try {
        const res = await homePageQuery()
        // console.log("Homepage Query data", res)
        return NextResponse.json({res})
        // return NextResponse.json({ error: "Please Login First" }, { status: 200 }, {"data": data});
    } catch (error) {
        return NextResponse.json("Server Internal Error", {status: 500})
    }
}
