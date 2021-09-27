// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

// Express Middleware
// Without
// New Request -> Run Route Handler
// With
// New Request -> Do Something/Customise Behaviour -> Run Route Handler

// Maintenance Middleware
// app.use((req, res, next) => {
//         res.status(503).send('Site Under Maintenance.')
// })

const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async(req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth