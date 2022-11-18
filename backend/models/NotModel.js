const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notSchema = new Schema({
    baslik: {
        type: String,
        required: [true, "Başlık zorunlu alan..."],
    },
    aciklama: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("Not", notSchema);