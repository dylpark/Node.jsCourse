// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})