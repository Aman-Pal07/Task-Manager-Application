import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import { fileURLToPath } from "url";
import path from "path";

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sendEmail = async (options, type) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  // Set up Handlebars
  const handlebarsOptions = {
    viewEngine: {
      extName: ".handlebars",
      partialsDir: path.resolve(__dirname, "../views"),
      defaultLayout: false,
    },
    viewPath: path.resolve(__dirname, "../views"),
    extName: ".handlebars",
  };

  transporter.use("compile", hbs(handlebarsOptions));

  let template = "";
  let subject = "";

  // Dynamically set template and subject based on email type
  if (type === "verify") {
    template = "emailVerification";
    subject = "Please verify your email address";
  } else if (type === "forgot") {
    template = "forgotPassword";
    subject = "Password Reset Request";
  }

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: subject,
    template: template, // Use the specified template
    context: {
      name: options.name,
      link: options.link,
    },
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${options.email} for ${type} action.`);
  } catch (error) {
    console.error("Error sending email: ", error);
    throw new Error("Email could not be sent");
  }
};

export default sendEmail;
