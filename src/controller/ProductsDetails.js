const User = require("../models/productD");
var nodemailer = require("nodemailer");

exports.createProduct = (req, res) => {
    const img = req.file.path;
    console.log(img)
    const { ProductName,CategoryName } = req.body;
    console.log(ProductName,CategoryName)
    let ProductID = Math.random() + ProductName
    const _user = new User({
        ProductID,
        CategoryName,
        ProductName,
        img
    });

    _user.save((error, data) => {
        if (error) {
            return res.status(400).json({
                message: error
            });
        }
        if (data) {
            return res.status(201).json({
                message: "Products created Successfully..!",
            });
        }
    });
 

};


exports.getProducts = (req, res) => {
    User.find({}).exec((error, Products) => {
        if (error) return res.status(400).json({ error });
        if (Products) {
            res.status(200).json({ Products });
        }
    });
};
exports.Sendmail = (req, res) => {
    console.log(req.body)
    const link = req.body.Produ
    const values = Object.values(link)
    console.log(values)
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "jattesh13@gmail.com",
            pass: "Jrh@9686648757"
        }
    });
    const Email = "ssss@ss.com"
    const Phone = "998621790"
    // var fieldheader = `hi <br> how are you ? <br> this is testing <br>`
    var fieldheader = `Dear Sales Team, <br>We have a new enquiry from below details: <br> Email: ${Email} <br> Phone:${Phone}<br> Products:${values}<br> `
    var mailOptions = {
        from: "Jattesh13@gmail.com",
        to: "Jattesh13@gmail.com",
        subject: "Youtube tutorial",
        html: fieldheader
    }

    transporter.sendMail(mailOptions, function (error, data) {
        if (error) {
            return res.status(400).json(
                {
                    error
                }

            )
        }
        else {
            return res.status(200).json(
                {
                    data: data
                }

            )
        }
    })
};