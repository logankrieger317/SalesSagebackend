const { Schema } = require('mongoose');

const profileSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
        location: { type: String, required: true },
        bio: { type: String, required: true },
        image: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        // products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
    },
    { timestamps: true }
);

module.exports = profileSchema;
