const { ValidationError } = require('apollo-server-express');
const querystring = require('querystring');
const { serverConfig } = require('../../nuxtServerConfig');
const nodemailer = require('nodemailer');
const { User } = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

async function sendEmail(emailReceiver, emailSubject, htmlBody) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mark.yarchak.6@gmail.com',
      pass: 'v6565v6565',
    },
  });
  return new Promise(async (resolve, reject) => {
    const info = await transporter.sendMail({
    from: '"Notex.cloud" <mark.yarchak.6@gmail.com>',
    to: emailReceiver,
    subject: emailSubject,
    text: 'Hello world?',
    html: htmlBody,
  });
    resolve(`Message sent: ${info.messageId}`);
  });
}

const sendRecoveryEmail = async (_, userData) => {
  const userByEmail = await User.findOne({email: userData.email});
  // if exist user by specified email
  if (userByEmail) {
    // create short identify
    const urlToken = Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9);
    // and then store it to database by received email
    await User.findOneAndUpdate({ email: userData.email }, { recoveryUrlId: urlToken });
    // create second identify - token with expiry
    const emailToken = jwt.sign({email: userData.email}, config.emailVerify, { expiresIn: '1h' });
    // make recovery-url that will be sent to specified email
    const recoveryUrl = `${serverConfig.httpHost}:${serverConfig.port}/account-recovery/${urlToken}?record=${emailToken}`;

    // add link to contacts and help later...
    const htmlBody = `
<div style="display: flex; justify-content: center;">
  <div style="max-width: 500px; background-color: #e9e9e9; padding: 15px;">
    <div style="font-size: 18px;">Hello ${userByEmail.fullName}.</div>
    <div style="font-size: 18px; color: #6b6b6b;">If you didn't send statement for password recovery, just ignore this letter</div>
    <div style="font-size: 15px;">
      <a href="${recoveryUrl}">Change password by this link</a>
    </div>
    <div style="font-size: 18px;">
      <span style="color: red">Important!</span> You have only 1 hour to change the password by this link,
      so please come up with it.
    </div>
    <div style="display: flex; flex-wrap: wrap; font-size: 14px;">
      <div style="margin-right: 10px;"><a href="">Help</a></div>
      <div><a href="">Contacts</a></div>
      <div></div>
    </div>
  </div>
</div>
    `;
    return await sendEmail(userByEmail.email, 'Password recovery', htmlBody).catch(console.error);
  } else throw new ValidationError('There are no users with specified email');
};

module.exports.sendRecoveryEmail = sendRecoveryEmail;
