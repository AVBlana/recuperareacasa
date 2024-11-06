// api/sendEmail.js

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

    // Format email content
    const emailContent = `
      Selected Scopes: ${selectedScopes.join(", ")}
      Selected Problems: ${selectedProblems.join(", ")}
      Selected Localizations: ${selectedLocalizations.join(", ")}
      User Feedback 1: ${userFeedback1}
      User Feedback 2: ${userFeedback2}
      User Name: ${userName}
      User Phone: ${userPhone}
      User Email: ${userEmail}
      User Block: ${userBlock}
      User Street: ${userStreet}
      User Street Nr: ${userNumber}
      User Sc: ${userSc}
      User Ap: ${userAp}
      Selected Day: ${selectedDay.join(", ")}
      Selected Time: ${selectedOption}
    `;

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/v1/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "info@recuperareacasa.ro",
        to: "recuperareacasa@gmail.com",
        subject: "New Form Submission",
        text: emailContent,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email via Resend");
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
