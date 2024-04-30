// api/sendEmail.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const {
      selectedCheckboxes,
      selectedScopes,
      selectedLocalizations,
      selectedProblems,
      selectedDay,
      selectedAgreementTerms,
      selectedNewsletter,
      userFeedback1,
      userFeedback2,
      userName,
      userPhone,
      userEmail,
      userBlock,
      userStreet,
      userNumber,
      userSc,
      userAp,
      selectedOption,
    } = req.body;

    // Use Nodemailer or your preferred email-sending solution here
    const transporter = nodemailer.createTransport({
      /* transporter configuration */
    });

    const mailOptions = {
      from: "contact@recuperareacasa.ro",
      to: "recuperareacasa@gmail.com",
      subject: "New Form Submission",
      text: `
        Selected Scopes: ${selectedScopes.join(", ")}
        Selected Problems: ${selectedProblems.join(", ")}
        Selected Localizations: ${selectedLocalizations.join(", ")}
        User Feedback 1: ${userFeedback1}
        User Feedback 2: ${userFeedback2}
        User name: ${userName}
        User phone: ${userPhone}
        User Email: ${userEmail}
        User Block: ${userBlock}
        User Street: ${userStreet}
        User Street nr: ${userNumber}
        User Sc: ${userSc}
        User Ap: ${userAp}
        Selected Day: ${selectedDay.join(", ")}
        Selected Time: ${selectedOption}

        /* ...other form fields */
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
