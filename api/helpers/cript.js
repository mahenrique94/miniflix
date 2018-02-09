const CONFIG = {
    algorithm : "aes256",
    secret : "chaves",
    type : "hex"
}
const crypto = require("crypto");

module.exports = () => {

    return {
        crypt : string => {
            const cipher = crypto.createCipher(CONFIG.algorithm, CONFIG.secret);
            cipher.update(string);
            return cipher.final(CONFIG.type);
        },
        decrypt : string => {
            const decipher= crypto.createDecipher(CONFIG.algorithm, CONFIG.secret);
            decipher.update(string, CONFIG.type);
            return decipher.final();
        }
    }

}