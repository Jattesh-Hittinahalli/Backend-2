const { check, validationResult } = require("express-validator");

exports.validateSignupRequest = [
    check("firstName")
        .notEmpty()
        .withMessage("firstName is required"),
    check("profession")
        .notEmpty()
        .withMessage("profession is required"),
    check("profession"),
    check("email")
        .isEmail()
        .withMessage("Valid Email is required"),
    check("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 character long"),
    check("PhoneNo")
        .notEmpty()
        .withMessage("Phone no is required")
];
exports.validatepassword = [
    check("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 character long"),
];

exports.validateSigninRequest = [
    check("email")
        .isEmail()
        .withMessage("Valid Email is required"),
    check("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 character long")
];

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(201).json({ error: errors.array()[0].msg });
    }
    next();
};
