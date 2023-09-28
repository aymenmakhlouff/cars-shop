const express = require("express")
let router = express.Router()

const {getAllcategories,getOnecategories,addOnecategory,updateOnecategory,deleteOnecategory}=require("../controllers/categories.controller")


router.get("/getAll",getAllcategories)
router.get("/:getIdcategory",getOnecategories)
router.post("/add",addOnecategory)
router.put("/:idUpdatecategory",updateOnecategory)
router.delete("/:idDeletecategory",deleteOnecategory)

module.exports = router