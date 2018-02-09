const cryptHelper = require("../helpers/cript")();

module.exports = api => {

    const user = api.models.users;

    return {
        auth : (req, res) => {
            req.body.active = true;
            req.body.password = cryptHelper.crypt(req.body.password);
            user.findOne(req.body).exec()
                .then(user => {
                    if (!user) {
                        res.status(401).json({message : "User not found"});
                    }

                    res.send(cryptHelper.decrypt(user.password));
                })
                .catch(error => {
                    console.error(error);
                    res.status(500).json(error);
                });
        }
    }

}