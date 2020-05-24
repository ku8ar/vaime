// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
const sgMail = require('@sendgrid/mail')

const apiKey = process.env.SENDGRID_API_KEY
const toEmail = process.env.TO_EMAIL
const fromEmail = process.env.FROM_EMAIL

sgMail.setApiKey(apiKey)

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body)

  try {
    const msg = {
      from: {
        email: fromEmail,
        name: 'Vaime Travel'
      },
      subject: 'New reservation',
      html: '<span></span>',
      category: [ "Tour" ],
      personalizations: [
        {
          to: [
            {
              email: body.email,
              name: `${body.name} ${body.surname}`
            }
          ],
          bcc: [
            {
              email: toEmail,
              name: `new reservation`
            }
          ],
          dynamic_template_data: body
        }
      ],
      template_id: 'd-40a7a7f2c8d0401c977b1cf4aaec4ea0'
    };
    sgMail.send(msg).then(
      () => callback(null, {
        statusCode: 200,
        body: ''
      }),
      error => callback(null, {
        statusCode: 500,
        body: JSON.stringify(error)
      })
    )
  } catch (e) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify(e)
    })
  }

}
