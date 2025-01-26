import { Client as WorkflowClient } from "@upstash/workflow";
import { Client as QStashClient, resend } from "@upstash/qstash";
import config from "@/lib/config";
import emailjs from '@emailjs/browser'

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

const qstashClient = new QStashClient({
  token: config.env.upstash.qstashToken,
});

export const sendEmail = async ({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) => {
  await qstashClient.publishJSON({
    api: {
      name: "email",
      provider: resend({ token: config.env.resendToken }),
    },
    body: {
      from: "JS Mastery <contact@adrianjsmastery.com>",
      to: [email],
      subject,
      html: message,
    },
  });
};

// the above logic used resend
//  however its a paid service so im using emailjs rather

// const sendEmail = async (templateParams: any) => {
//   try {
//     const serviceID = ''
//     const templateID = ''
//     const userID = ''


//     // send email
//     const response = await emailjs.send(
//       serviceID, 
//       templateID, 
//       templateParams,
//       userID);
//       console.log('Email sent successfully:', response.status, response.text);
//   } catch (error) {
//     console.error('error sending email: ', error);
//     throw new Error('Failed to send email');
//   }
// };