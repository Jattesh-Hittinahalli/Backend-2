const slugify = require("slugify");
const products = require("../models/products");

exports.createproduct = (req, res) => {
    // for (let i of details) {
    //     const data = i.filename;
    //     productImage.push({ img: data });
    // }
    const { CategoryName, Product_code, Cost, description } = req.body;
    let obj =
    {
        CategoryName,
        Product_code,
        Cost,
        description

    }
    if (req.body.CableTrayAngularAccessories) {
        obj.CableTrayAngularAccessories = req.body.CableTrayAngularAccessories;
    }
    if (req.body.CableTrays) {
        obj.CableTrays = req.body.CableTrays;
    }
    if (req.body.StraightLengths) {
        obj.StraightLengths = req.body.StraightLengths;
    }
    if (req.body.SteelSurfaceCableTrunkingAccessories) {
        obj.SteelSurfaceCableTrunkingAccessories = req.body.SteelSurfaceCableTrunkingAccessories;
    }
    if (req.body.SteelCableLadder) {
        obj.SteelCableLadder = req.body.SteelCableLadder;
    }
    if (req.body.SteelCableLadderCover) {
        obj.SteelCableLadderCover = req.body.SteelCableLadderCover;
    }
    if (req.body.SteelCableLadderAccessories) {
        obj.SteelCableLadderAccessories = req.body.SteelCableLadderAccessories;
    }
    if (req.body.MetalCableChannels) {
        obj.MetalCableChannels = req.body.MetalCableChannels;
    }
    if (req.body.MetalCableChannelsCableTrayAngularAccessories) {
        obj.MetalCableChannelsCableTrayAngularAccessories = req.body.MetalCableChannelsCableTrayAngularAccessories;
    }
    if (req.body.PipeClamps) {
        obj.PipeClamps = req.body.PipeClamps;
    }

    const _products = new products(obj);

    _products.save((error, data) => {
        if (data) {
            return res.status(200).json({
                data
            });
        } else {
            return res.status(400).json({
                error
            });
        }
    });
};

exports.update = (req, res) => {
    products.findOne({ _id: req.body._id }).exec((error, data) => {
        if (error) {
            return res.status(400).json({
                message: "Something Went Wrong..."
            })
        }
        if (data) {
            var myquery = { _id: req.body._id };
            let dataUpdate = req.body
            var newvalues = dataUpdate;
            products.replaceOne(myquery, newvalues).then((data) => {
                if (data) {
                    res.status(200).json({
                        message: "Products has Updated..."
                    });
                }
            });
        }
    })

}

exports.getproduct = (req, res) => {
    products.find({}).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        if (data) {
            return res.status(200).json({ data });

        }
    });
};

exports.deleteproduct = (req, res) => {
    if (req.body._id) {
        products.findOneAndDelete({ _id: req.body._id }).then((data) => {
            if (data) {
                return res.status(200).json({
                    data
                })
            }
            else {
                return res.status(400).json(
                    {
                        message: "something went wrong"
                    }

                )

            }
        });
    }
};
