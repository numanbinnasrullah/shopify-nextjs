import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    const {name, email, message, subject} = body
    console.log("Contact us Api Request", body)
  

  const transporter = nodemailer.createTransport({
    host: "mail.yorkshirebedding.co.uk",
    port: 465,
    secure: true,
    auth: {
      user: "ars@yorkshirebedding.co.uk",
      pass: "wRzvsqO?llvf6456",
    },
  });

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `${name} ${email}`, // sender address
      to: "ars@yorkshirebedding.co.uk", // list of receivers
      subject: subject, // Subject line
      html: message, // html body
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json({ msg: "Send Success" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Server Internal Error" }, { status: 500 });
  }
}
