const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_APP, // generated ethereal user
      pass: process.env.EMAIL_APP_PASS, // generated ethereal password
    },
  });

  transporter.verify().then(()=>{
    console.log('Ready for send emails')
  })


  module.exports = {
    transporter
  }