const { Schema } = require('mongoose');

const profileSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: false },
        about: { type: String, required: true },
        photo: { type: String, required: false },
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true },
        notifications: { type: Boolean, required:false },
        user: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true }
);

module.exports = profileSchema;
