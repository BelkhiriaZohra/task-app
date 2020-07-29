const app = require('./app')
require('dotenv').config()
const port = process.env.PORT

console.log(process.env.SENDGRID_API_KEY)
console.log(process.env.JWT_SECRET)
console.log(process.env.MONGODB_URL)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

