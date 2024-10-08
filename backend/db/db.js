const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connection Successful")
    } catch (error) {
        console.log("DB Connection Error")
    }
}

module.exports = {
    db
}