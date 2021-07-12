const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    categoryId: {
        type: String,
        required: true,
    },
    productCode: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }


},
    { timestamps: true },
)


module.exports = mongoose.model('displayProduct', userSchema);