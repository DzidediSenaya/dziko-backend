import mongoose from 'mongoose'

const schema = mongoose.Schema;

const accountSchema = new schema({
    email: { type: String, required: true, unique: true, lowercase: true, },
    password: { type: String, required: true, minlength: 6 },
})

export const accountModel = mongoose.model('account', accountSchema)