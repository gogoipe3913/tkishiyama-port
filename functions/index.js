const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const gmailEmail = functions.config().gmail.email;
const gmailPass = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;

// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPass
  }
});

// 管理者用のメールテンプレート
const adminContents = (data) => {
  return `Portfolioからのお問い合わせがありました。

      Name：
      ${data.name}

      phone：
      ${data.phone}

      Address：
      ${data.email}

      Message：
      ${data.message}
    `;
};

exports.sendMail = functions.https.onCall(async (data, context) => {
  // メール設定
  let adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: 'Portfolioでのお問い合わせ',
    text: adminContents(data)
  };

  // 管理者へのメール送信
  try {
    await mailTransport.sendMail(adminMail);
  } catch (e) {
    console.error(`send failed. ${e}`);
    throw new functions.https.HttpsError('internal', 'send failed');
  }
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
