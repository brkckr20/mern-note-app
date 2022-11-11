const NotModel = require("../models/NotModel");
const mongoose = require("mongoose");

const notOlustur = async (req, res) => {
    const { baslik, aciklama } = req.body;
    try {
        const not = await NotModel.create({ baslik, aciklama });
        res.status(200).json(not);
    } catch (error) {
        res.status(400).json({
            err: error.message
        })
    }
}

const notlariGetir = async (req, res) => {
    try {
        const notlar = await NotModel.find().sort({ createdAt: -1 });
        res.status(200).json(notlar);
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
}

const notGetir = async (req, res) => {
    const { id } = req.params;

    //id dbye uyuyor mu?
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: "ID geçersiz" })
    }
    try {
        const not = await NotModel.findById(id);
        if (!not) {
            return res.status(404).json({ err: "Not bulunamadı!" })
        }
        res.status(200).json(not);
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
}


const notSil = async (req, res) => {
    const { id } = req.params;

    //id dbye uyuyor mu?
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: "ID geçersiz" })
    }
    try {
        const not = await NotModel.findOneAndDelete({ _id: id });
        if (!not) {
            return res.status(404).json({ err: "Not bulunamadı!" })
        }
        res.status(200).json(not);
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
}
const notGuncelle = async (req, res) => {
    const { id } = req.params;

    //id dbye uyuyor mu?
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: "ID geçersiz" })
    }
    try {
        const not = await NotModel.findOneAndUpdate({ _id: id }, {
            ...req.body
        }, { new: true });
        if (!not) {
            return res.status(404).json({ err: "Not güncelleme işlemi başarısız!" })
        }
        res.status(200).json(not);
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
}


module.exports = {
    notOlustur,
    notlariGetir,
    notGetir,
    notSil,
    notGuncelle
}