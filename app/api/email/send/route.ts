// app/api/email/send/route.ts
import { NextResponse } from 'next/server'
const nodemailer = require("nodemailer");


export async function POST(req: Request) {
    const data = await req.json()

    // example: extract and use email data
    const { name, email, message } = data
    try{
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",

            auth: {
                user: "galalsops@gmail.com",
                pass: process.env.GMAIL_APP_PASSWORD,
            },

            
        });

        let mailOptions = {
            from: email,
            to: 'gald12123434@gmail.com',
            subject: `A message from a potential customer named ${name}`,
            text: `Email: ${email}\n${message}`,
        };
        // send email logic here...
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch(err){
        return NextResponse.json({ success: false }, {status: 500})
    }
    return NextResponse.json({ success: true }, {status: 200})
}
