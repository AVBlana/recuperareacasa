// pages/api/sendEmail.ts
import { StepsContext } from "@/theme/components/organisms/StepsForm/context";
import { NextApiRequest, NextApiResponse } from "next";
import { useContext } from "react";
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
        selectedScopes,
        selectedProblems,
        selectedLocalizations,
        selectedDay,
        selectedOption,
        userFeedback1,
        userFeedback2,
        userName,
        userEmail,
        userAp,
        userStreet,
        userSc,
        userNumber,
        userBlock,
        userPhone,
        // ... other form fields
      } = req.body;

      // Use Resend to send an email
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "tink.blana@gmail.com", // Replace with the actual recipient email address
        subject: "Message from contact form",
        text: `
          Selected Scopes: ${selectedScopes.join(", ")}
          Selected Problems: ${selectedProblems.join(", ")}
          Selected Localizations: ${selectedLocalizations.join(", ")}
          Selected Day: ${selectedDay}
          Selected Time: ${selectedOption}
          User Feedback 1: ${userFeedback1}
          User Feedback 2: ${userFeedback2}
          User name: ${userName}
          User email: ${userEmail}
          User street: ${userStreet}
          User street nr: ${userNumber}
          User building: ${userBlock}
          User entrance: ${userSc}
          User ap: ${userAp}
          User phone: ${userPhone}

          // ... other form fields
        `,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
