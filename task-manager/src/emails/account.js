// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const mailgun = require("mailgun-js")
const API_KEY = process.env.MG_API_KEY
const DOMAIN = process.env.MG_DOMAIN
const FROM_EMAIL = process.env.MG_FROM_EMAIL
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN })

// const data = {
//     from: 'New User '+ fromEmail,
//     to: 'me@example.com',
//     subject: 'Hello',
//     text: 'Testing Mailgun!'
// }
// mg.messages().send(data, function(error, body) {
//     console.log(body);
// })

const welcomeEmail = (email, name) => {
    mg.messages().send({
        to: email,
        from: 'Create Test ' + FROM_EMAIL,
        subject: 'Create Test Request',
        text: `Welcome to the app, ${name}. You can create a html object below.`
    })
}

const cancelEmail = (email, name) => {
    mg.messages().send({
        to: email,
        from: 'Delete Test ' + FROM_EMAIL,
        subject: 'Delete Test Request',
        text: `Sorry to see you go, ${name}. We have deleted your account and data.`
    })
}

module.exports = {
    sendWelcomeEmail: welcomeEmail,
    sendCancelEmail: cancelEmail
}