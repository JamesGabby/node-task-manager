const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3002

// app.use((req, res, next) => {
//     res.status(503).send({ message: 'Site under maintenance' })
// })

app.use(cors())

// Parses incoming JSON to an object to be accessed by the Request Handlers
app.use(express.json())

// Plug modulised routes into app
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is on port',  port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    const task = await Task.findById('624454e8387b1abc78caf289')
    await task.populate('owner')
    console.log(task.owner)

    const user = await User.findById('624453a761a2b85843a61c2a')
    await user.populate('tasks')
    console.log(user.tasks)
}

