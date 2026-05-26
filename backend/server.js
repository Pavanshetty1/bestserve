const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-mail", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Pest Control Service Enquiry",
      html: `
        <h2>New Booking Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.json({
      success: true,
      message:
        "Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
