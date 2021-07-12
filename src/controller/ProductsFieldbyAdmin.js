const ProductsFieldbyAdmin = require("../models/ProductsFieldbyAdmin");


exports.ProductsFieldbyAdmin = (req, res) => {
    if (!req.body.ProductCode) {
        res.status(400).json({
            message: "Must Have ProductCode..."
        })
    }
    console.log(req.body)
    const PPK = req.body.PPK;
    const HdgUnitPrice = req.body.HdgUnitPrice;
    const HdgCharge = req.body.HdgCharge
    const Tonnage = req.body.tonnage
    const ProductCode = req.body.ProductCode
    const Name = req.body.Name

    const obj = {
        Name

    };
    if (ProductCode == 1 || ProductCode == 2 || ProductCode == 5 || ProductCode == 7 || ProductCode == 8 || ProductCode == 6 || ProductCode == 9 || ProductCode == 13 || ProductCode == 14 || ProductCode == 15 || ProductCode == 19 || ProductCode == 18) {
        obj.PPK = PPK;
        obj.ProductCode = ProductCode;
    }

    else if (ProductCode == 3) {
        obj.PPK = PPK;
        obj.HdgUnitPrice = HdgUnitPrice;
        obj.ProductCode = ProductCode;
    }
    else if (ProductCode == 4) {
        obj.PPK = PPK;
        obj.HdgUnitPrice = HdgUnitPrice;
        obj.ProductCode = ProductCode;
    }
    else if (ProductCode == 16 || ProductCode == 17) {
        obj.HdgUnitPrice = HdgUnitPrice;
        obj.Tonnage = Tonnage;
        obj.ProductCode = ProductCode;
    }
    else if (ProductCode == 10 || ProductCode == 11 || ProductCode == 12) {
        obj.HdgCharge = HdgCharge;
        obj.ProductCode = ProductCode;
    }

    else {
        return res.status(400).json({
            Message: "Write Valid Product ID.."
        });
    }



    const _ProductsFieldbyAdmin = new ProductsFieldbyAdmin(obj);

    _ProductsFieldbyAdmin.save((error, data) => {
        if (error)
            return res.status(400).json({
                error
            });

        if (data) return res.status(200).json({ data });
    });
};

exports.getadminProducts = (req, res) => {
    ProductsFieldbyAdmin.find({}).exec((error, Products) => {
        if (error) return res.status(400).json({ error });
        if (Products) {
            res.status(200).json({ Products });
        }
    });
};


exports.update = (req, res) => {
    const { PPK, HdgUnitPrice, _id, HdgCharge, Tonnage } = req.body;

    obj = {

    }

    if (PPK) {
        obj.PPK = PPK;
    }
    if (HdgUnitPrice) {
        obj.HdgUnitPrice = HdgUnitPrice;
    }
    if (HdgCharge) {
        obj.HdgCharge = HdgCharge;
    }
    if (Tonnage) {
        obj.Tonnage = Tonnage;
    }
    ProductsFieldbyAdmin
        .find(
            { _id: req._id },
        ).exec().then((data) => {
            if (data) {
                var myquery = { _id: _id };
                var newvalues = { $set: obj };
                ProductsFieldbyAdmin
                    .updateOne(myquery, newvalues).exec((error, data) => {
                        if (error) {
                            res.status(400).json({
                                message: "Something went wrong...",
                            });
                        } else {
                            res.status(200).json({
                                message: "Products is Updated"

                            });
                        }
                    });
            }
        })



}

exports.getadminproductbycategory = (req, res) => {
    console.log(req.query.CategoryID)
    ProductsFieldbyAdmin.find({ categoryID: req.query.CategoryID }).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        if (data) {
            return res.status(200).json({ data });

        }
    });
};