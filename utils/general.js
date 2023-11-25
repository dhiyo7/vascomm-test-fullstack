import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const formatCurr = (price) => {
  const idr = new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    useGrouping: true,
  });

  return idr.format(price);
};

export const sendEmailPassword = async (subject, to, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL, // Your email address
      pass: process.env.NODEMAILER_PASSWORD, // Your email password apps
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to,
    subject: subject,
    text,
  };

  try {
    const resEmail = await transporter.sendMail(mailOptions);
    if (resEmail) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const baseResponse = ({ status, message, data, error }) => {
  return NextResponse.json({
    status,
    message,
    data,
    error,
  });
};
