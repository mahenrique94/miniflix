const mongoSanitize = require("mongo-sanitize");
const slug = require("slug");

module.exports = api => {

    const model = api.models.medias;

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
                .then(media => res.json(media))
                .catch(error => {
                    console.error(error);
                    res.status(404).json(error);
                });
        },
        list : (req, res) => {
            model.find().exec()
                .then(medias => res.json(medias))
                .catch(error => {
                    console.error(error);
                    res.status(500).json(error);
                });
        },
        save : (req, res) => {
            req.body.slug = slug(req.body.title.toString().toLowerCase());
            model.create(req.body)
                .then(media => res.json(media))
                .catch(error => {
                    console.error(error);
                    res.status(500).json(error);
                });
        },
        update : (req, res) => {
            const _id = mongoSanitize(req.body._id);
            req.body.slug = slug(req.body.title.toString().toLowerCase());
            req.body.datupdate = new Date();
            model.findByIdAndUpdate(_id, req.body).exec()
                .then(media => res.json(media))
                .catch(error => {
                    console.error(error);
                    res.status(500).json(error);
                });
        }
    }

}