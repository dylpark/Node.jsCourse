// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('6145364acd2c6698d43c3d3f', {}).then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})