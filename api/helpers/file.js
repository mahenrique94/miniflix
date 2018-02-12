const slug = require("slug");
const fs = require("fs");
const path = require("path");
const fileType = require("file-type");

module.exports = () => {

    return {
        upload : file => {
            return new Promise((resolve, reject) => {
                fs.readFile(file.path, (error, data) => {
                    if (error) {
                        reject(error);
                    }

                    const uploaded = `${slug(file.originalname.toString().substring(0, file.originalname.lastIndexOf(".")).toLowerCase())}.${fileType(data).ext}`;
                    const to = path.join(file.destination, uploaded);
                    const stream = fs.createWriteStream(to);
                    stream.write(data);
                    stream.end();
                    fs.unlink(file.path);

                    resolve(uploaded);
                });
            });
        }
    }

}