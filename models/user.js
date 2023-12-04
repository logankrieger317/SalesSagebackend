const {Schema} = require('mongoose')

const userSchema = new Schema(
    {
        user: {type: String, required: true},
        username: {type: String, required: true},
    },
    {timestamps: true}
)

module.exports = userSchema