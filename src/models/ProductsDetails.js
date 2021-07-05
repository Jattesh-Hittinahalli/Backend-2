const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        ProductName: {
            type: String,
            required: true,
            trim: true,
        },
        ProductID: {
            type: String,
            required: true,
            unique: true
        },
        CategoryName: {
            type: String,
            required: true,
            trim: true,
        },

        Category_Name: {
            type: String,
        },

        img: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('ProductDetails', userSchema);