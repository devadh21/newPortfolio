import nodemailer from "nodemailer";
import { NextResponse ,NextRequest } from 'next/server'




export async function POST(req:NextRequest) {
  try {
    const { floating_full_name, floating_email, subject, floating_message } = await req.json();
   
    

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // e.g. smtp.hostinger.com, smtp.gmail.com
      port: 465,
      secure: true, // true for 465, false for 587
      
      auth: {
        user: process.env.EMAIL_USER, //  your email
        pass: process.env.EMAIL_PASS, /// your email password or app password
      },
    });
    console.log("transporter:",process.env.EMAIL_USER, process.env.EMAIL_PASS);

    // Send email
    await transporter.sendMail({
      from: `"${floating_full_name}" <${floating_email}>`,
      to: process.env.EMAIL_USER,
      subject,
      text: floating_message,
      html: `<h2>Email : ${floating_email}</h2><p>${floating_message}</p>`,
    });
    

    return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ success: false }), { status: 500 });
  }
}
