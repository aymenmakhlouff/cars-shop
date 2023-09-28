const express = require("express")
let router = express.Router()

const {getAllcolors,getOnecolors,addOnecolor,updateOnecolor,deleteOnecolor}=require("../controllers/color.controller")


router.get("/getAll",getAllcolors)
router.get("/:getIdcolor",getOnecolors)
router.post("/add",addOnecolor)
router.put("/:idUpdatecolor",updateOnecolor)
router.delete("/:idDeletecolor",deleteOnecolor)

module.exports = router