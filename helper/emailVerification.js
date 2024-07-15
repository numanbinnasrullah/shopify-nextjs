import { resend } from "@/lib/resend";
import { NextResponse } from "next/server";

import VerificationEmail from '../emailTemp/emailTemp';

export async function sendVerificationEmail(email, name, message){
    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: "numanbinnasrullah@gmail.com",
            subject: 'Ecommerce Contact',
            react: VerificationEmail({email, name, msg:message}),
          });
        // return {success:  true, message:"Email Successfully sent to the User"}
        return NextResponse.json({message:"Email Successfully sent to the User"}, {status: 200})
    } catch (emailError) {
        console.log("Error sending verification email", emailError);
        // return { success : false, message : "Failed to send email"}
        return NextResponse.json({ message : "Failed to send email"}, {status: 500})
    }
}