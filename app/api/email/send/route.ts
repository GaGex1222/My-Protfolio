// app/api/email/send/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend';


export async function POST(req: Request) {
    const data = await req.json()

    // example: extract and use email data
    const { name, email, message } = data
    try{
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: 'galdadon@galdadon.com',
            to: 'gald12123434@gmail.com',
            subject: 'A message from my website has arrived!',
            text: `${message}\n\nName: ${name} \n\nReply to: ${email}`
        });
    } catch(err){
        console.log("Error occured when tried sending email: ", err)
        return NextResponse.json({ success: false }, {status: 500})
    }
    return NextResponse.json({ success: true }, {status: 200})
}
