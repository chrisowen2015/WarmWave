'use strict';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req) {
  const { firstName, lastName, emailAddress, subject, message } = await req.json();

  const successMessage = "Email sent successfully!";

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
        setting service as 'gmail' is same as providing these setings:
  
        host: "smtp.gmail.com",
        port: 465,
        secure: true
        
        If you want to use a different email provider other than gmail, you need to provide these manually.
        Or you can go use these well known services and their settings at
        https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
    */
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: subject,
    text: 'Message sent from ' + firstName + ' ' + lastName + ', ' + emailAddress + " \n \n" + message,
  };

  const sendMailPromise = async () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve(successMessage);
        } else {
          reject(err.message);
        }
      });
    });

  try {
    const res = await sendMailPromise();
    return NextResponse.json({ message: res }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}