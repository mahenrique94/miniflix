const mongoose = require("mongoose");

module.exports = () => {

    const users = mongoose.Schema({
        name : {
            maxlength : 60,
            required : true,
            type : String
        },
        username : {
            index : {
                unique : true
            },
            maxlength : 30,
            required : true,
            type : String
        },
        password : {
            maxlength : 255,
            required : true,
            type : String
        },
        slug : {
            index : {
                unique : true
            },
            maxlength : 60,
            required : true,
            type : String
        },
        active : {
            default : true,
            required : true,
            type : Boolean
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

    return mongoose.model("users", users);

}