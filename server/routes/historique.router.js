const express = require("express")
let router = express.Router()

const {getAllhistoriques,getOnehistoriques,addOnehistorique,updateOnehistorique,deleteOnehistorique}=require("../controllers/historique.controller")


router.get("/getAll",getAllhistoriques)
router.get("/:getIdhistorique",getOnehistoriques)
router.post("/add",addOnehistorique)
router.put("/:idUpdatehistorique",updateOnehistorique)
router.delete("/:idDeletehistorique",deleteOnehistorique)

module.exports = router