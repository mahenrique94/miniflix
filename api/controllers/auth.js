const jwt = require("jsonwebtoken");
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
                        res.status(401).json({"message" : "Authentication failed, user not found"});
                    }
                    const token = jwt.sign({ "username" : user.username}, api.get("api_secret"), {expiresIn : "7d"});
                    res.send({token});
                })
                .catch(error => {
                    console.error(error);
                    res.status(500).json(error);
                });
        },
        checkToken : (req, res, next) => {
            const token = req.body.token || req.query.token || req.headers["x-access-token"];
            if (token) {
                jwt.verify(token, api.get("api_secret"), (err, decoded) => {
                    if (err) {
                        return res.status(403).json({"message" : "Failed attempt to authenticate token"});
                    }
                    req.decoded = decoded;
                    next();
                });
            } else {
                return res.status(403).json({"message" : "No token provided"});
            }
        }
    }

}