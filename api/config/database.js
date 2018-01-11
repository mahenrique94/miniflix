const mongoose = require("mongoose");

module.exports = database => {

    mongoose.connect(`mongodb://${process.env.mongoUrl || "localhost"}/${database}`);

    mongoose.connection.on("connected", () => console.log(`[Mongoose] => Connected at database: ${database}`));
    mongoose.connection.on("disconnected", () => console.log(`[Mongoose] => Disconnected at database: ${database}`));
    mongoose.connection.on("error", error => console.log(`[Mongoose] => An error happened on trying to connected at database: ${database}, ${error}`));

    process.on("SIGINIT", () => {
        mongoose.connection.close(() => {
            console.log(`[Mongoose] => Disconnected at database ${database} because application finished`);
            process.exit(0);
        });
    });
    
}