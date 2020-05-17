// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
const sendMail = require('sendmail')()

const CONTACT_EMAIL = 'juszczykjakub@gmail.com'

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body)

  try {
    // validateLength('body.details', body.details, 10, 1000)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message
    })
  }

  const descriptor = {
    from: `"${body.email}" <no-reply@gql-modules.com>`,
    to: CONTACT_EMAIL,
    subject: `${body.name} sent you a message from gql-modules.com`,
    text: body.details
  }

  sendMail(descriptor, e => {
    if (e) {
      callback(null, {
        statusCode: 500,
        body: e.message
      })
    } else {
      callback(null, {
        statusCode: 200,
        body: ''
      })
    }
  })
}
