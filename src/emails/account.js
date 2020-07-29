const sgMail = require('@sendgrid/mail')

//
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'zohra.belkhiria@ensi-uma.tn',
        subject: 'Thanks for joining in!',
        text: `welcome to the app,${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'zohra.belkhiria@ensi-uma.tn',
        subject: 'Good Bye',
        text:' Hope see you back soon'
    })
}
module.exports = {sendWelcomeEmail, sendCancelEmail}