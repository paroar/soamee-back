import mongoose from "mongoose"

const PhoneSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
}, { collection: 'catalogue' })

export default mongoose.model("Phones", PhoneSchema)