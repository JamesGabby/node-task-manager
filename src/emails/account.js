const sgMail = require('@sendgrid/mail')

const sendGridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendGridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jamesgabbitus@gmail.com',
        subject: 'Welcome to Xofia!',
        html: `<h2>Hello ${name}! <b>You're going to <em>love</em> Xofia!</b></h2>`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jamesgabbitus@gmail.com',
        subject: 'Sorry to see you go!',
        html: `<p>Hello ${name},<br><br>
               I'm sorry that you're leaving us. Is there anything you'd like to tell us before you go?<br>
               Kind regards,<br><br>
               Xofia Team
              </p>`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}

// sgMail.sendMultiple({
//     to: ['ksenialexeev@gmail.com', 'jamesgabbitus@gmail.com'],
//     from: 'jamesgabbitus@gmail.com',
//     subject: 'Email from Node :o',
//     text: 'Nodey node node (I want cookies)'
// }).then(() => {
//     console.log('Email sent')
// }).catch((error) => {
//     console.error(error)
// })