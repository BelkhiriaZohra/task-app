const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

/*sgMail.send({
    to: 'zohra.belkhiria@ensi-uma.tn',
    from: 'zohra.belkhiria@ensi-uma.tn',
    subject: 'This is my first creation',
    text: 'I hope this one actually get to you.'
})*/

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'zohra.belkhiria@ensi-uma.tn',
        subject: 'Thanks for joining in!',
        text: 'welcome to the app,${name}. Let me know how you get along with the app.'
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