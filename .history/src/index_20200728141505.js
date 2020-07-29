const app = require('./app')
//require('./db/mongoose')
require('dotenv').config()
const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

