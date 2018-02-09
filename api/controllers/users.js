const mongoSanitize = require("mongo-sanitize");
const slug = require("slug");
const cryptHelper = require("../helpers/cript")();

module.exports = api => {

    const model = api.models.users;

    return {
        delete : (req, res) => {
            const _id = mongoSanitize(req.body._id);
            model.remove({_id}).exec()
                .then(() => res.status(204).end())
                .catch(error => {
                    console.error(error);
                    res.status(500).json(error);
                });
        },
        edit : (req, res) => {
            const _id = mongoSanitize(req.params.id);
            model.findOne({_id}).exec()
                .then(user => res.json(user))
                .catch(error => {
                    console.error(error);
                    res.status(404).json(error);
                });
        },
        list : (req, res) => {
            model.find().exec()
                .then(users => res.json(users))
                .catch(error => {
                    console.error(error);
                    res.status(500).json(error);
                });
        },
        save : (req, res) => {
            req.body.slug = slug(req.body.username.toString().toLowerCase());
            req.body.password = cryptHelper.crypt(req.body.password);
            model.create(req.body)
                .then(user => res.json(user))
                .catch(error => {
                    console.error(error);
                    res.status(500).json(error);
                });
        },
        update : (req, res) => {
            const _id = mongoSanitize(req.body._id);
            req.body.slug = slug(req.body.username.toString().toLowerCase());
            req.body.datupdate = new Date();
            model.findByIdAndUpdate(_id, req.body).exec()
                .then(user => res.json(user))
                .catch(error => {
                    console.error(error);
                    res.status(500).json(error);
                });
        }
    }

}