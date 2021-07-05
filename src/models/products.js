const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true
    },

    Product_code: {
        type: String,
        required: true
    },
    Cost: {
        type: Number,
        required: true
    },
    description: {
        type: String,

    },
    CableTrayAngularAccessories:
    {
        Code
            : {
            type: String
        },
        SideHeights: {
            LD: {
                type: String
            },
            MD: {
                type: String
            },
            HD: {
                type: String
            },
            EHD: {
                type: String
            },

        },
        TrayWidth: {
            type: String
        },
    },

    CableTrays: {
        Height: {
            type: String
        },
        Width: {
            type: String
        },
        Thickness: {
            type: String
        },
        Length: {
            type: String
        },
    },

    StraightLengths: {
        Code: {
            type: String
        },
        Height: {
            type: Number
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
    },

    SteelSurfaceCableTrunkingAccessories: {
        Code: {
            type: String
        },
        AccessoryType: {
            type: String
        },
        Reference: {
            type: String
        },
        TrayWidths: {
            type: String
        }

    },
    SteelCableLadder: {
        Code: {
            type: String
        },
        Height: {
            type: Number
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
    },
    SteelCableLadderCover: {
        Width: {
            type: Number
        },
        Codefor: {
            HundredmmHeight
                : {
                type: String
            },
            HundredandfifltymmHeight: {
                type: String
            },


        },

    },

    SteelCableLadderAccessories: {
        Description: {
            type: String
        },
        Codefor: {
            FiftymmHeight
                : {
                type: String
            },
            SeventyfivemmHeight
                : {
                type: String
            },
            HundredmmHeight
                : {
                type: String
            },
            HundredandfifltymmHeight: {
                type: String
            },


        },


    },
    MetalCableChannels: {
        TypeofChannel: {
            type: String,

        },
        Dimensions: {
            type: Number

        },
        Length: {
            type: Number
        },
        Thickness: {
            type: Number
        },
        Finishtype: {
            type: Number
        },
    },
    MetalCableChannelsCableTrayAngularAccessories: {
        Type: {
            type: String,
        },
        Code: {
            type: String,
        },
        Hole: {
            type: String,
        },
    },
    PipeClamps: {
        Code: {
            type: String,
        },
        Sixe: {
            type: String,
        },
    },



    createdby: {
        type: mongoose.Schema.Types.ObjectId, ref: 'superadmin',

    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'category',
    },
},

    { timestamps: true },
)

module.exports = mongoose.model('Products1', userSchema);