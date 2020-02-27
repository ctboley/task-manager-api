const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "taskapp@ctboley.com",
    subject: "Welcome!",
    text: `Welcome to the app, ${name}.`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "taskapp@ctboley.com",
    subject: "Goodbye",
    text: `Sorry to see you leave, ${name} :(`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
