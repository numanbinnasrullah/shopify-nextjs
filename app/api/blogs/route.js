// import cartCreateQuery from "@/graphql/cartcreate";
import blogsQuery from "@/graphql/blogs";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const res = await blogsQuery()
        // console.log("Cart Return response", res)
        return NextResponse.json({msg:"Blogs Fetched Successfuly", res}, {status: 201})
        // return NextResponse.json({ error: "Please Login Frst" }, { status: 200 }, {"data": data});
    } catch (error) {
        return NextResponse.json("Server Internal Error", {status: 500})
    }
}
