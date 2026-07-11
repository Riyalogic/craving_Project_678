import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const sendEmail = async(to, String,message) => {
try {
    console.log("Started Sending Email");
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:process.env.GMAIL_USERNAME
        }
    })
} catch (error) {
    
}
}