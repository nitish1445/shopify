import sendEmail from "../config/email.js";

export const genEmailOTP = async ({ email, otp }) => {
  try {
    const subject = "Your OTP Code for Shopify Login/Signup";
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
</head>
<body style="margin:0; padding:0; background:#f4f6f8; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="420" cellpadding="0" cellspacing="0"
          style="background:#ffffff; border-radius:16px; padding:32px;
          box-shadow:0 12px 30px rgba(0,0,0,0.08);">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:10px;">
              <h2 style="margin:0; color:#111; font-weight:600;">
                🛍️ Shopify
              </h2>
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td align="center" style="padding-bottom:10px;">
              <h3 style="margin:0; color:#222; font-weight:500;">
                Verify your identity
              </h3>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td align="center"
              style="color:#666; font-size:14px; line-height:1.6; padding-top:8px;">
              Enter the verification code below to continue.<br/>
              This code will expire in <strong>5 minutes</strong>.
            </td>
          </tr>

          <!-- OTP Box -->
          <tr>
            <td align="center" style="padding:28px 0;">
              <div style="
                display:inline-block;
                padding:14px 28px;
                font-size:28px;
                letter-spacing:6px;
                font-weight:600;
                color:#111;
                background:#f1f3f5;
                border-radius:10px;
                border:1px solid #e5e7eb;
              ">
                ${otp}
              </div>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="border-top:1px solid #eee; padding-top:20px;"></td>
          </tr>

          <!-- Warning -->
          <tr>
            <td align="center"
              style="font-size:12px; color:#888; line-height:1.6;">
              Never share this code with anyone.<br/>
              If you didn’t request this, you can safely ignore this email.
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center"
              style="padding-top:20px; font-size:12px; color:#aaa;">
              © ${new Date().getFullYear()} Shopify India Ltd.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
    `;
    await sendEmail(email, subject, html);
  } catch (error) {
    console.log("Email OTP Error:", error);
  }
};
