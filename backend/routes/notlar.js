const express = require("express");

const router = express.Router();
//getir
router.get("/", (req, res) => {
    res.json({ message: "Tüm Notlar" })
});
//getir
router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        message: `${id} li not`
    })
});
//kaydet
router.post("/", (req, res) => {
    res.json({
        message: "Yeni not ekle"
    })
})
//silme
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        message: `${id} li notu sil`
    })
})

//güncelleme
router.patch("/:id", (req, res) => {
    res.json({
        message: `${req.body.ad} güncelle`
    })
})

module.exports = router;