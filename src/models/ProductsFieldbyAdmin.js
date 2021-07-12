const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        Name: {
            type: String
        },
        PPK: {
            type: Number,
        },
        HdgUnitPrice: {
            type: Number,
        },
        HdgCharge: {
            type: Number,
        },
        Tonnage: {
            type: Number,
        },
        ProductCode: {
            type: String,
            unique: true
        },
        Tonnage: {
            type: String
        },
        categoryID: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("ProductsFieldbyAdmin", userSchema);
