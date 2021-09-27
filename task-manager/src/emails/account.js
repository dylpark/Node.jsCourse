const mailgun = require("mailgun-js")
const DOMAIN = ''
const api_key = ''
const mg = mailgun({ apiKey: api_key, domain: DOMAIN })

// const data = {
//     from: 'Excited User <me@123.mailgun.org>',
//     to: 'me@123.mailgun.org',
//     subject: 'Hello',
//     text: 'Testing some Mailgun awesomness!'
// }
// mg.messages().send(data, function(error, body) {
//     console.log(body);
// })

const welcomeEmail = (email, name) => {
    mg.messages().send({
        to: email,
        from: 'User <>',
        subject: 'Thanks for signing up!',
        text: `Welcome to the app, ${name}. You can create a html object below.`
    })
}

const cancelEmail = (email, name) => {
    mg.messages().send({
        to: email,
        from: 'User <>',
        subject: 'Confirmed Request',
        text: `Sorry to see you go, ${name}. We have deleted your account and data.`
    })
}

module.exports = {
    sendWelcomeEmail: welcomeEmail,
    sendCancelEmail: cancelEmail
}