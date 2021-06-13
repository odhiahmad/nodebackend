const { cekLokasi, ambilAbsen } = require("./absen.controller");
const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");

router.post("/getLokasi",checkToken,cekLokasi);
router.patch("/ambilAbsen",checkToken,ambilAbsen);


module.exports = router;