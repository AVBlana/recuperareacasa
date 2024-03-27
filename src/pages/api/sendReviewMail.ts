import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const {
        // Destructure and extract data from the request body
        rating,
        text,
        reviewer,
        title,
      } = req.body;

      // Use Resend to send an email
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "recenzii@recuperareacasa.ro", // Replace with the actual recipient email address
        subject: "New Review for Recuperare Acasa",
        text: `
          Star Rating: ${rating}
          Message: ${text}
          Name: ${reviewer}
          Ocupation: ${title}
          
        `,
      });

      res.status(200).json({ message: "Review sent successfully" });
    } catch (error) {
      console.error("Error sending review:", error);
      res.status(500).json({ error: "Failed to send review" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
