const category = require("../models/category");
const slugify = require("slugify");

exports.create_category = (req, res) => {
    console.log(req.body)
    const name = req.body.name;
    const parentId = req.body.parentId
    console.log(name)

    const obj = {
        name,
        parentId
    };

    const _category = new category(obj);

    _category.save((error, data) => {
        if (error)
            return res.status(400).json({
                error
            });

        if (data) return res.status(200).json({ data });
    });
};

exports.get_category = (req, res) => {
    category.find({}).exec((error, categories) => {
        if (error) return res.status(400).json({ error });
        if (categories) {
            const categoryList = createCategories(categories);
            res.status(200).json({ categoryList });
        }
    });
};

function createCategories(categories, parentId = null) {
    const categoryList = [];
    let category;
    if (parentId == null) {
        category = categories.filter(cat => cat.parentId == undefined);
    } else {
        category = categories.filter(cat => cat.parentId == parentId);
    }

    for (let cate of category) {
        let data = {
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            parentId: cate.parentId,
            childern: createCategories(categories, cate._id)
        };
        if (cate.price) {
            data.price = cate.price;
        }

        categoryList.push(data);
    }

    return categoryList;
}

exports.getcategory = (req, res) => {
    User.find({}).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        if (data) {
            return res.status(200).json({ data });

        }
    });
};

exports.deletecategory = (req, res) => {
    console.log(req.body._id)
    if (req.body._id) {
        category.findOneAndDelete({ _id: req.body._id }).then((data) => {
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
