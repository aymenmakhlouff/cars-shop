const express = require("express")
let router = express.Router()

const {getAllbrands,getOnebrands,addOnebrand,updateOnebrand,deleteOnebrand}=require("../controllers/brands.controller")


router.get("/getAll",getAllbrands)
router.get("/:getIdbrand",getOnebrands)
router.post("/add",addOnebrand)
router.put("/:idUpdatebrand",updateOnebrand)
router.delete("/:idDeletebrand",deleteOnebrand)


module.exports = router