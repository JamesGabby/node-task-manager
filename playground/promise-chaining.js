require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('623b18609653ff4b147c5595', { age: 18 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 18 })
}).then((result) => {
    console.log(result)
})