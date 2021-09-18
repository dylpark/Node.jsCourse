// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('61452f93e7d0bb95dbb86137', { age: 17 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 17 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})