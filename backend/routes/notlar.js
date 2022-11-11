const express = require("express");
const { notOlustur, notlariGetir, notGetir, notSil, notGuncelle } = require("../controller/notController")

const router = express.Router();
//tümünü listele
router.get("/", notlariGetir);
//tekil listeleme
router.get("/:id", notGetir);
//kaydet
router.post("/", notOlustur)
//silme
router.delete("/:id", notSil)
//güncelleme
router.patch("/:id", notGuncelle)

module.exports = router;