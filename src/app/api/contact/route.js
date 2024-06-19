import { NextResponse,NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(NextRequest, res) {
  const reqBody = await NextRequest.json();
  const {name ,email, message} = reqBody;
  console.log(name,email)
  const transporter = nodemailer.createTransport({
    service:'gmail',
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email, // Customer's email address
      to: 'syntalix.ai@gmail.com', // Replace with your email address
      subject: `New message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
      replyTo: email, // This ensures replies go to the customer
    });
    return NextResponse.json({
            message:"email sent",
            success: true
        })
  } catch (error) {
    console.error(error);
    return NextResponse.json({error: error.message},{
      status: 500
  })
  }
}


