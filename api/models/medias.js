const mongoose = require("mongoose");

module.exports = () => {

    const medias = mongoose.Schema({
        title : {
            index : {
                unique : true
            },
            maxlength : 120,
            required : true,
            type : String
        },
        describe : {
            minlength: 200,
            required : false,
            type : String
        },
        cattegories : [{
            name : {
                maxlength : 60,
                required : false,
                type : String
            },
            datecreate : {
                default : new Date(),
                required : false,
                type : Date
            }
        }],  
        tags : [{
            name : {
                maxlength : 60,
                required : false,
                type : String
            },
            datecreate : {
                default : new Date(),
                required : false,
                type : Date
            }
        }],
        notes : [{
            user : {
                required : false,
                type : mongoose.Schema.Types.ObjectId,
            },
            note : {
                min : 0,
                max : 10,
                required : false,
                type : Number
            }
        }],
        comments : [{
            user : {
                required : false,
                type : mongoose.Schema.Types.ObjectId,
            },
            comment : {
                required : false,
                type : String
            },
        }],
        image : {
            maxlength : 255,
            required : false,
            type : String
        },
        video : {
            maxlength : 255,
            required : false,
            type : String
        },
        slug : {
            index : {
                unique : true
            },
            maxlength : 255,
            required : true,
            type : String
        },
        datecreate : {
            default : new Date(),
            required : true,
            type : Date
        },
        dateupdate : {
            default : new Date(),
            required : true,
            type : Date
        }
    });

    return mongoose.model("medias", medias);

}