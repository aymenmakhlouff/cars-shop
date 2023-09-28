const express = require("express")
let router = express.Router()

const {getAllcars,getOnecars,addOnecar,updateOnecar,deleteOnecar,getAllOther,getAllusercars,getSearch}=require("../controllers/cars.controller")


router.get("/getAll",getAllcars)
router.get("/getonly/:notUser",getAllOther)
router.get("/getuserCars/:idProfile",getAllusercars)
router.get("/:getIdcar",getOnecars)
router.post("/add",addOnecar)
router.put("/:idUpdatecar",updateOnecar)
router.delete("/:idDeletecar",deleteOnecar)
router.get("/search/:notUser/:na",getSearch)

module.exports = router