require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6230d9f27f3431782ac404a7').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('623aefd501ddafcc8e4b6136').then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})