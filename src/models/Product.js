const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        parentId: {
            type: String
        },

        CableTrays: {
            TotalHdgPrice: {
                type: Number
            },
            MsCost: {
                type: Number
            },
            HDGunitprice: {
                type: Number
            },
            Weight: {
                type: Number
            },
            Height: {
                type: Number,
            },
            Width: {
                type: Number
            },
            Thickness: {
                type: Number
            },
            Length: {
                type: Number
            },
            Flange: {
                type: Number
            },
            Density: {
                type: Number
            },
            PPK: {
                type: Number,
            },
            Cost: {
                type: Number,
            },
            SP: {
                type: Number,
            },
            Grade: {
                type: Number
            }


        },
        TrayCover: {
            TotalHdgPrice: {
                type: Number
            },
            MsCost: {
                type: Number
            },
            HDGunitprice: {
                type: Number
            },
            Weight: {
                type: Number
            },
            Height: {
                type: Number,
            },
            Width: {
                type: Number
            },
            Thickness: {
                type: Number
            },
            Length: {
                type: Number
            },
            Flange: {
                type: Number
            },
            Density: {
                type: Number
            },
            PPK: {
                type: Number,
            },
            Cost: {
                type: Number,
            },
            SP: {
                type: Number,
            }


        },
        TrunkingcwCover: {
            Tonnage: {
                type: Number
            },
            coverPrice: {
                type: Number
            },
            coverThickness: {
                type: Number
            },
            totalPrice: {
                type: Number
            },
            Height: {
                type: Number,
            },
            Width: {
                type: Number
            },
            Thickness: {
                type: Number
            },
            Length: {
                type: Number
            },
            Flange: {
                type: Number
            },
            Density: {
                type: Number
            },
            PPK: {
                type: Number,
            },
            Cost: {
                type: Number,
            },
            SP: {
                type: Number,
            },
            MsCost: {
                type: Number
            },
            HdgCharge: {
                type: Number
            },
            TotalHdgCharges: {
                type: Number
            }
        },
        TrunkingCover: {
            Height: {
                type: Number,
            },
            Width: {
                type: Number
            },
            Thickness: {
                type: Number
            },
            Length: {
                type: Number
            },
            Flange: {
                type: Number
            },
            Density: {
                type: Number
            },
            PPK: {
                type: Number,
            },
            Cost: {
                type: Number,
            },
            SP: {
                type: Number,
            }
        },
        TrunkingCoverAbove100mm: {
            Height: {
                type: Number,
            },
            Width: {
                type: Number
            },
            Thickness: {
                type: Number
            },
            Length: {
                type: Number
            },
            Flange: {
                type: Number
            },
            Density: {
                type: Number
            },
            PPK: {
                type: Number,
            },
            Cost: {
                type: Number,
            },
            SP: {
                type: Number,
            }
        },

        Channel41X21: {
            Tonnage: {
                type: Number
            },
            coverPrice: {
                type: Number
            },
            coverThickness: {
                type: Number
            },
            totalPrice: {
                type: Number
            },
            Height: {
                type: Number,
            },
            Width: {
                type: Number
            },
            Thickness: {
                type: Number
            },
            Length: {
                type: Number
            },
            Flange: {
                type: Number
            },
            Density: {
                type: Number
            },
            PPK: {
                type: Number,
            },
            Cost: {
                type: Number,
            },
            SP: {
                type: Number,
            },
            Mscost: {
                type: Number
            },
            HdgCharge: {
                type: Number
            },
            TotalHdgCharges: {
                type: Number
            },
            Type: {
                type: String
            }

        },
        Channel41X41: {
            Tonnage: {
                type: Number
            },
            coverPrice: {
                type: Number
            },
            coverThickness: {
                type: Number
            },
            totalPrice: {
                type: Number
            },
            Height: {
                type: Number,
            },
            Width: {
                type: Number
            },
            Thickness: {
                type: Number
            },
            Length: {
                type: Number
            },
            Flange: {
                type: Number
            },
            Density: {
                type: Number
            },
            PPK: {
                type: Number,
            },
            Cost: {
                type: Number,
            },
            SP: {
                type: Number,
            },
            Mscost: {
                type: Number
            },
            HdgCharge: {
                type: Number
            },
            TotalHdgCharges: {
                type: Number
            },
            Type: {
                type: String
            }
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Product4", userSchema);
