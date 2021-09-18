// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('61452f93e7d0bb95dbb86137', { age: 17 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 17 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// Same Functionality as Above, Using Async/Await
const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('61452f93e7d0bb95dbb86137', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})