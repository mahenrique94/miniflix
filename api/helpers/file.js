const fs = require("fs");
const path = require("path");

module.exports = () => {

    return {
        upload : file => {
            return new Promise((resolve, reject) => {
                fs.readFile(file.path, (error, data) => {
                    if (error) {
                        reject(error);
                    }

                    const to = path.join(file.destination, `${file.name}.${file.type}`);
                    const stream = fs.createWriteStream(to);
                    stream.write(data);
                    stream.end();
                    fs.unlink(file.path);

                    resolve(`${file.name} uploaded with sucess`);
                });
            });
        }
    }

}