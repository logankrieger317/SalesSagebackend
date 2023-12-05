const {Schema} = require('mongoose')

const userSchema = new Schema(
    {
        user: {type: String, required: true},
        username: {type: String, required: true},
        profile: { type: Schema.Types.ObjectId, ref: 'profile' },
    },
    {timestamps: true}
)

module.exports = userSchema