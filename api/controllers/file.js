const slug = require("slug");
const fileHelper = require("../helpers/file")();

module.exports = api => {

    const medias = api.models.medias;

    return {
        download : (req, res) => res.download(`${api.get("api_directory")}/${req.params.file}`),
        upload : (req, res) => {
            if (req.files) {
                req.files.forEach(file => {
                    fileHelper.upload(file)
                        .then(uploaded => {
                            medias.findByIdAndUpdate(req.body._id, { $set : {"image" : uploaded}})
                                .then(media => res.json({message : `File ${uploaded} uploaded with success to ${media._id} media`}))
                                .catch(error => res.status(404).json(error));
                        })
                        .catch(error => res.status(500).json(error));
                });
            } else {
                return res.status(404).json({message : "File upload failed, file not provided"})
            }
        }
    }

}