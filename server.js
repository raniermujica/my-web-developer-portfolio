import express, { Router } from "express";
const router = Router();
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  
  router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const company = req.body.company;
    const phone = req.body.phone;
    const mail = {
      from: name,
      to: "ranieremujica@gmail.com",
      subject: "Mensaje desde Potfolio Web",
      html: `<p>Nombre: ${name}</p>
             <p>Email: ${email}</p>
             <p>Empresa: ${company}</p>
             <p>Teléfono: ${phone}</p>
             <p>Mensaje: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json(error);
      } else {
        res.json({ code: 200, status: "Message Sent" });
      }
    });
  });