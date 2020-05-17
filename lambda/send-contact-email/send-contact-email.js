// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const CONTACT_EMAIL = 'juszczykjakub@gmail.com'

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body)

  const msg = {
    to: CONTACT_EMAIL,
    from: body.email,
    subject: 'sendgrid',
    text: 'and easy to do anywhere, even with Node.js',
    html: event.body,
  };
  sgMail.send(msg).then(
    () =>       callback(null, {
      statusCode: 200,
      body: ''
    }),
    error => callback(null, {
      statusCode: 500,
      body: JSON.stringify(error)
    })
  )
}
