const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    name_en: {
        type: String,
    },
    category: {
        type: String,
    },
    image: {
        type: String,
    },
    location: {
        type: String,
    },
    phone: {
        type: String,
    },
    google_map: {
        type: String,
    },
    rating: {
        type: Number,
    },
    description: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true,
        required: true
    }
})

module.exports = mongoose.model('Restaurant', restSchema)