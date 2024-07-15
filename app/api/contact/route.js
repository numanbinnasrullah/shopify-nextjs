
import { sendVerificationEmail } from "@/helper/emailVerification";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    const {name, email, message} = body
    console.log("Contact us Api Request", body)
    // return NextResponse.json("Server Internal Error")
    try {
         const emailResponse = await sendVerificationEmail(email, name, message);
        //  console.log("Email response :", emailResponse)
            if(!emailResponse.ok){
                return NextResponse.json({
                    success: false,
                    message: emailResponse.message
                }, {status: 500})
            }
            return NextResponse.json({
                success: true,
                message: "Email Successfully sent to User"
            }, {status: 200})
    } catch (error) {
        return NextResponse.json("Server Internal Error", {status: 500})
    }
}