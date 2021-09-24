const mailgun = require("mailgun-js")
const DOMAIN = '123.mailgun.org'
const api_key = '123'
const mg = mailgun({ apiKey: api_key, domain: DOMAIN })

const data = {
    from: 'Excited User <me@123.mailgun.org>',
    to: 'test@example.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
}
mg.messages().send(data, function(error, body) {
    console.log(body);
})