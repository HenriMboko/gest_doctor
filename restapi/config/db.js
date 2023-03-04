var mongoose = require("mongoose");
var colors = require("colors/safe")


mongoose.set('strictQuery', true)


const ConnectDb = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_DB)
        console.log(colors.red("Connection database with success..."))
    } catch (error) {
        console.error(error)
    }
}


module.exports = ConnectDb;