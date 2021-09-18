// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('61454fc77a2ba7a479b8d0f5', {}).then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('614550af82e939a556e8ea11').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})