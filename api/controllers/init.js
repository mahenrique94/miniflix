const criptHelper = require("../helpers/cript")();

const CONFIG = {
    users : [{
        "name" : "Admin",
        "username" : "admin",
        "password" : criptHelper.crypt("admin123"),
        "slug" : "admin"
    }]
};

module.exports = api => {

    const users = api.models.users;

    createUsers = () => users.create(CONFIG.users).catch(error => console.error(error));

    return {
        init : (req, res) => {
            createUsers();
            return res.status(201).end();
        }
    }

}