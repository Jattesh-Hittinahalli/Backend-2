const category = require("../models/Product");
const ProductsFieldbyAdmin = require("../models/ProductsFieldbyAdmin");
const displayProduct = require("../models/displayProduct")


exports.CreateProduct = async (req, res) => {
    const parentId = req.body.parentId;
    const obj = {
        parentId: parentId
    };
    const CategoryID = req.body.CategoryID
    console.log(CategoryID)
    if (!CategoryID) {
        console.log("hi")
        return res.status(400).json({
            Message: "Please Send Category ID"
        });
    }
    if (!parentId) {
        console.log("hi")
        return res.status(400).json({
            Message: "Please Send parent ID"
        });
    }
    if (CategoryID == "60d22936de1c062a84064523") {
        let Width = req.body.Width;
        let Height = req.body.Height;
        let Thickness = req.body.Thickness;
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let PPK = admin.PPK
        let Flange = 24;
        let Length = 3000;
        let Density = 0.00000785;
        let Cost = PPK * Density * Length * Thickness * (Flange + Width + (Height * 2));
        let SP = Cost / 0.75
        let = CableTrays = {
            Height,
            Width,
            Thickness,
            PPK,
            Flange,
            Length,
            Density,
            Cost,
            SP
        }
        obj.CableTrays = CableTrays;

    }

    if (CategoryID == "60d22943de1c062a84064524") {
        let Width = req.body.Width;
        var THeight = 15;
        if (req.body.Height) {
            THeight = req.body.Height
        }

        let Thickness = req.body.Thickness;
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let PPK = admin.PPK
        let Flange = 5;
        let Length = 3000;
        let Density = 0.00000785;
        let Cost = PPK * Density * Length * Thickness * (Flange + Width + (THeight * 2))
        let SP = Cost / 0.75
        console.log(SP, Cost);
        let = TrayCover = {
            Height: THeight,
            Width,
            Thickness,
            PPK,
            Flange,
            Length,
            Density,
            Cost,
            SP
        }
        obj.TrayCover = TrayCover;

    }

    if (CategoryID == "60d2351d2be72817d8e1d918") {
        let Width = req.body.Width;
        let Height = req.body.Height;
        let Thickness = req.body.Thickness;
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        console.log(admin)
        let PPK = admin.PPK
        let HDGunitprice = admin.HdgUnitPrice
        let Flange = 24;
        let Length = 3000;
        let Density = 0.00000785;
        let Weight = 5.80272;
        let MsCost = 27.3308112;
        let TotalHdgPrice = HDGunitprice * Weight
        let Cost = TotalHdgPrice + MsCost
        let SP = Cost / 0.75
        let = CableTrays = {
            HDGunitprice,
            MsCost,
            Weight,
            Height,
            Width,
            Thickness,
            PPK,
            Flange,
            Length,
            Density,
            TotalHdgPrice,
            Cost,
            SP
        }
        obj.CableTrays = CableTrays;

    }

    if (CategoryID == "60d235272be72817d8e1d919") {
        let Width = req.body.Width;
        let Height = 15;
        if (req.body.Height) {
            Height = req.body.Height
        }
        let Thickness = req.body.Thickness;
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let PPK = admin.PPK
        let HDGunitprice = admin.HdgUnitPrice
        let Flange = 5;
        let Length = 3000;
        let Density = 0.00000785;
        let Weight = 3.497175;
        let MsCost = 16.47169425;
        let TotalHdgPrice = HDGunitprice * Weight
        let Cost = TotalHdgPrice + MsCost
        let SP = Cost / 0.75
        let = TrayCover = {
            HDGunitprice,
            MsCost,
            Weight,
            Height,
            Width,
            Thickness,
            PPK,
            Flange,
            Length,
            Density,
            TotalHdgPrice,
            Cost,
            SP
        }
        obj.TrayCover = TrayCover;

    }
    if (CategoryID == "60d250e72e8dee2da061a57f") {
        let Width = req.body.Width;
        let Height = 15;
        let Grade = req.body.grade
        if (req.body.Height) {
            Height = req.body.Height
        }
        let Thickness = req.body.Thickness;
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let PPK = admin.PPK
        let Flange = 5;
        let Length = 3000;
        let Density = 0.000008;
        let Cost = PPK * Density * Length * Thickness * (Flange + Width + (Height * 2))
        let SP = Cost / 0.75
        let = TrayCover = {
            Grade,
            Height,
            Width,
            Thickness,
            PPK,
            Flange,
            Length,
            Density,
            Cost,
            SP
        }
        obj.TrayCover = TrayCover;

    }
    if (CategoryID == "60d250db2e8dee2da061a57e") {
        let Width = req.body.Width;
        let Height = req.body.Height;
        let Grade = req.body.grade;
        let Thickness = req.body.Thickness;
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let PPK = admin.PPK
        let Flange = 24;
        let Length = 3000;
        let Density = 0.000008;
        let Cost = PPK * Density * Length * Thickness * (Flange + Width + (Height * 2))
        let SP = Cost / 0.75
        let = CableTrays = {
            Grade,
            Height,
            Width,
            Thickness,
            PPK,
            Flange,
            Length,
            Density,
            Cost,
            SP
        }
        obj.CableTrays = CableTrays;

    }
    if (CategoryID == "60d26024d5d3201edc87d34e") {
        let Width = req.body.Width;
        let Height = req.body.Height;
        let Thickness = req.body.Thickness;
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let PPK = admin.PPK
        let coverThickness;
        let Flange = 20;
        let Length = 3000;
        let Density = 0.00000785;
        if (req.body.coverThickness) {
            coverThickness = req.body.coverThickness
        }
        else {

            coverThickness = Thickness
        }
        function cover(coverThickness) {
            let Width = req.body.Width;
            let Height = 10;
            let PPK = admin.PPK
            let Length = 3000;
            let Density = 0.00000785;
            let Cost = PPK * Density * Length * coverThickness * (Width + (Height * 2) + 0.6)
            return Cost / 0.75
        }
        var coverPrice = cover(coverThickness);
        let Cost = PPK * Density * Length * Thickness * (Flange + Width + (Height * 2))
        let SP = Cost / 0.75
        let totalPrice = SP + coverPrice
        if (req.body.coverThickness) {
            coverThickness = req.body.coverThickness
        }
        else {

            coverThickness = Thickness
        }

        let = TrunkingcwCover = {
            coverThickness,
            totalPrice,
            Height,
            Width,
            Thickness,
            PPK,
            Flange,
            Length,
            Density,
            Cost,
            SP,
            coverPrice
        }
        obj.TrunkingcwCover = TrunkingcwCover;

    }

    if (CategoryID == "60d2602fd5d3201edc87d34f") {
        let Width = req.body.Width;
        let Height = 10;
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let PPK = admin.PPK
        let Length = 3000;
        let Density = 0.00000785;
        let Thickness = req.body.Thickness;
        let Cost = PPK * Density * Length * Thickness * (Width + (Height * 2)) + 0.6
        let SP = Cost / 0.75
        let = TrunkingCover = {
            Height,
            Width,
            Thickness,
            PPK,
            Length,
            Density,
            Cost,
            SP,
        }
        obj.TrunkingCover = TrunkingCover;
    }
    if (CategoryID == "60d2607ed5d3201edc87d350") {
        let Width = req.body.Width;
        let Height = 10;
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let PPK = admin.PPK
        let Length = 3000;
        let Density = 0.00000785;
        let Thickness = req.body.Thickness;
        let Cost = PPK * Density * Length * Thickness * (Width + (Height * 2)) + 0.8
        let SP = Cost / 0.75
        let = TrunkingCoverAbove100mm = {
            Height,
            Width,
            Thickness,
            PPK,
            Length,
            Density,
            Cost,
            SP,
        }
        obj.TrunkingCoverAbove100mm = TrunkingCoverAbove100mm;
    }

    if (CategoryID == "60d2aacfcf46652ea06b8a08") {
        let Width = req.body.Width;
        let Height = req.body.Height;
        let Weight = 5.6991;
        let Thickness = req.body.Thickness;
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let HdgCharge = admin.HdgCharge
        let coverThickness;
        let Tonnage = 4.71;
        let MsCost = Tonnage * Weight
        let TotalHgdCharge = HdgCharge * Weight
        let Flange = 20;
        let Length = 3000;
        let Density = 0.00000785;

        if (req.body.coverThickness) {
            coverThickness = req.body.coverThickness
        }
        else {

            coverThickness = Thickness
        }
        function cover(coverThickness) {
            let Weight = 3.1086;
            let HdgCharge = admin.HdgCharge
            let Tonnage = 4.7;
            let MsCost = Tonnage * Weight
            let TotalHgdCharge = HdgCharge * Weight
            let Cost = TotalHgdCharge * MsCost + 0.6
            return Cost / 0.75
        }
        var coverPrice = cover(coverThickness);
        let Cost = TotalHgdCharge + MsCost
        let SP = Cost / 0.75
        let totalPrice = SP + coverPrice
        if (req.body.coverThickness) {
            coverThickness = req.body.coverThickness
        }
        else {

            coverThickness = Thickness
        }

        let = TrunkingcwCover = {
            coverThickness,
            MsCost,
            totalPrice,
            Height,
            Width,
            Thickness,
            HdgCharge,
            Flange,
            Length,
            Density,
            Cost,
            SP,
            coverPrice,
            Weight
        }
        obj.TrunkingcwCover = TrunkingcwCover;

    }
    if (CategoryID == "60d2aaf4cf46652ea06b8a09") {
        let Width = req.body.Width;
        let Height = req.body.Height;
        if (req.body.coverThickness) {
            coverThickness = req.body.coverThickness
        }
        else {
            coverThickness = Thickness
        }
        let Weight = 3.1086;
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let HdgCharge = admin.HdgCharge
        let Length = 3000;
        let Density = 0.00000785;
        let Tonnage = 4.71;
        let MsCost = Tonnage * Weight
        let TotalHgdCharge = HdgCharge * Weight
        let Cost = TotalHgdCharge + MsCost + 0.6
        let SP = Cost / 0.75
        let = TrunkingCover = {
            HdgCharge,
            Tonnage,
            TotalHgdCharge,
            MsCost,
            Height,
            Width,
            Thickness,
            Length,
            Density,
            Cost,
            SP,
        }
        obj.TrunkingCover = TrunkingCover;
    }
    if (CategoryID == "60d2aafecf46652ea06b8a0a") {
        let Width = req.body.Width;
        let Height = req.body.Height;
        let Thickness = req.body.Thickness;
        let Weight = 3.1086;
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let HdgCharge = admin.HdgCharge
        let Length = 3000;
        let Density = 0.00000785;
        let Tonnage = 4.71;
        let MsCost = Tonnage * Weight
        let TotalHgdCharge = HdgCharge * Weight
        let Cost = TotalHgdCharge + MsCost + 0.8
        let SP = Cost / 0.75
        let = TrunkingCoverAbove100mm = {
            HdgCharge,
            Tonnage,
            TotalHgdCharge,
            MsCost,
            Height,
            Width,
            Thickness,
            Length,
            Density,
            Cost,
            SP,
        }
        obj.TrunkingCoverAbove100mm = TrunkingCoverAbove100mm;
    }

    if (CategoryID == "60d345379885af1bf0176f8e") {
        let Width = req.body.Width;
        let Height = req.body.Height;
        let Grade = req.body.Grade;
        let Thickness = req.body.Thickness;
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let PPK = admin.PPK
        let coverThickness;
        let Flange = 20;
        let Length = 3000;
        let Density = 0.000008;

        if (req.body.coverThickness) {
            coverThickness = req.body.coverThickness
        }
        else {

            coverThickness = Thickness
        }
        function cover(coverThickness) {
            let Cost = PPK * Density * Length * coverThickness * (Width + (Height * 2)) + 0.6
            return Cost / 0.75
        }
        var coverPrice = cover(coverThickness);
        let Cost = PPK * Density * Length * Thickness * (Flange + Width + (Height * 2))
        let SP = Cost / 0.75
        let totalPrice = SP + coverPrice
        if (req.body.coverThickness) {
            coverThickness = req.body.coverThickness
        }
        else {

            coverThickness = Thickness
        }

        let = TrunkingcwCover = {
            coverThickness,
            totalPrice,
            Height,
            Width,
            Thickness,
            Flange,
            Length,
            Density,
            Cost,
            SP,
            coverPrice,
            Grade
        }
        obj.TrunkingcwCover = TrunkingcwCover;

    }

    if (CategoryID == "60d345449885af1bf0176f8f") {
        let Width = req.body.Width;
        let Height = req.body.Height;
        let Grade = req.body.Grade;
        let Thickness = req.body.Thickness;
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let PPK = admin.PPK
        let Length = 3000;
        let Density = 0.000008;
        let Cost = PPK * Density * Length * Thickness * (Width + (Height * 2)) + 0.6
        let SP = Cost / 0.75
        let = TrunkingCover = {
            Height,
            Width,
            Thickness,
            Length,
            Density,
            Cost,
            PPK,
            SP,
        }
        obj.TrunkingCover = TrunkingCover;
    }

    if (CategoryID == "60d345519885af1bf0176f90") {
        let Width = req.body.Width;
        let Height = req.body.Height;
        let Grade = req.body.Grade;
        let Thickness = req.body.Thickness;
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let PPK = admin.PPK
        let Length = 3000;
        let Density = 0.000008;
        let Cost = PPK * Density * Length * Thickness * (Width + (Height * 2)) + 0.8
        let SP = Cost / 0.75
        let = TrunkingCoverAbove100mm = {
            Height,
            Width,
            Thickness,
            Length,
            Density,
            Cost,
            PPK,
            SP,
        }
        obj.TrunkingCoverAbove100mm = TrunkingCoverAbove100mm;
    }

    if (CategoryID == "60ded96c27fa630ff8c2b24a") {
        let Width = 41;
        let Height = 21;
        let Flange = 17
        let Thickness = 1.1
        let Type = req.body.Type
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let PPK = admin.PPK
        let Length = 3000;
        let Density = 0.00000785
        let Cost = PPK * Density * Length * Thickness * (Flange + Width + (Height * 2))
        let SP = Cost / 0.75
        let = Channel41X21 = {
            Type,
            Height,
            Width,
            Thickness,
            Length,
            Density,
            Cost,
            PPK,
            SP,
        }
        obj.Channel41X21 = Channel41X21;
    }
    if (CategoryID == "60ded97127fa630ff8c2b24b") {
        let Width = 41;
        let Height = 41;
        let Flange = 17
        let Thickness = 1.1
        let Type = req.body.Type
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let PPK = admin.PPK
        let Length = 3000;
        let Density = 0.00000785
        let Cost = PPK * Density * Length * Thickness * (Flange + Width + (Height * 2))
        let SP = Cost / 0.75
        let = Channel41X41 = {
            Type,
            Height,
            Width,
            Thickness,
            Length,
            Density,
            Cost,
            PPK,
            SP,
        }
        obj.Channel41X41 = Channel41X41;
    }

    if (CategoryID == "60ded98727fa630ff8c2b24d") {
        let Width = 41;
        let Height = 21;
        let Flange = 17
        let Thickness = 1.1
        let Type = req.body.Type
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let HdgUnitPrice = admin.HdgUnitPrice
        let Tonnage = admin.Tonnage
        let Length = 3000;
        let Weight = 2.5905;
        let Density = 0.00000785
        let Mscost = Tonnage * Weight
        let TotalHDGprice = HdgUnitPrice * Weight
        let Cost = TotalHDGprice + Mscost
        let SP = Cost / 0.75
        let = Channel41X21 = {
            Type,
            Tonnage,
            Flange,
            Mscost,
            TotalHDGprice,
            HdgUnitPrice,
            Height,
            Width,
            Thickness,
            Length,
            Density,
            Cost,
            SP,
        }
        obj.Channel41X21 = Channel41X21;
    }

    if (CategoryID == "60ded98327fa630ff8c2b24c") {
        let Width = 41;
        let Height = 41;
        let Flange = 17
        let Thickness = 1.1
        let Type = req.body.Type
        let admin = await ProductsFieldbyAdmin.findOne({ ProductCode: req.body.ProductCode }).exec()
        let HdgUnitPrice = admin.HdgUnitPrice
        let Tonnage = admin.Tonnage
        let Length = 3000;
        let Weight = 3.6267;
        let Density = 0.00000785
        let Mscost = Tonnage * Weight
        let TotalHDGprice = HdgUnitPrice * Weight
        let Cost = TotalHDGprice + Mscost
        let SP = Cost / 0.75
        let = Channel41X41 = {
            Type,
            Tonnage,
            Flange,
            Mscost,
            TotalHDGprice,
            HdgUnitPrice,
            Height,
            Width,
            Thickness,
            Length,
            Density,
            Cost,
            SP,
        }
        obj.Channel41X41 = Channel41X41;
    }



    const _category = new category(obj);
    _category.save((error, data) => {
        if (error)
            return res.status(400).json({
                error
            });

        if (data) return res.status(200).json({ data });
    });
};
exports.getallproduct = (req, res) => {
    console.log("Hi")
    category.find({}).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        if (data) {
            return res.status(200).json({ data });

        }
    });
};
exports.getproductbycategory = (req, res) => {
    console.log(req.query.CategoryID)
    category.find({ parentId: req.query.CategoryID }).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        if (data) {
            return res.status(200).json({ data });

        }
    });
};

exports.displayProduct = (req, res) => {
    const img = req.file.path;
    const { Name, categoryId, productCode } = req.body
    const _displayProduct = new displayProduct({
        Name,
        categoryId,
        productCode,
        img
    });

    _displayProduct.save((error, data) => {
        if (error) {
            return res.status(400).json({
                message: error
            });
        }
        if (data) {
            return res.status(201).json({
                message: data,
            });
        }
    });
}

exports.getDisplayproductbycategory = (req, res) => {
    console.log(req.query.CategoryID)
    displayProduct.find({ categoryId: req.query.CategoryID }).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        if (data) {
            return res.status(200).json({ data });

        }
    });
};

