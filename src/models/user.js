const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 20,
        },
        Address: {
            type: String,

        },
        PhoneNo: {
            type: String,
            required: true

        },
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            index: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        hash_password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "user",
        },
        img: {
            type: String,
        },
        contactNumber: { type: String },
        pofilePicture: { type: String },
    },
    { timestamps: true }
);

userSchema.virtual("password").set(function (password) {
    this.hash_password = bcrypt.hashSync(password);
});



userSchema.methods = {
    authenticate: async function (password) {
        return await bcrypt.compare(password, this.hash_password);
    },
};

module.exports = mongoose.model("User", userSchema);
