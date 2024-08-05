import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });


const sendEmail=async(email,eventName)=>{
    console.log(eventName,email,process.env.SMTP_MAIL,process.env.SMTP_PASSWORD,process.env.SMTP_HOST,process.env.SMTP_PORT)
var mailOptions={
    from:process.env.SMTP_MAIL,
    to:email,
    subject:"Message from Tech Team",
    message:"Thanks for applying ${eventName}.We will review your application soon.",
}
try{
  let info=await transporter.sendMail({
    from:process.env.SMTP_MAIL,
    to:email,
    subject:"Message from Tech Team",
    text:`Thanks for applying ${eventName}.We will review your application soon.`,
})
console.log(info.messageId)}
catch(err){
    console.log(err)
}

}

export default sendEmail;