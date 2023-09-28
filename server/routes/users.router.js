const express = require("express")
let router = express.Router()

const {getAllusers,getOneusers,addOneuser,updateOneUser,deleteOneuser,getonewithemail}=require("../controllers/users.controller")


router.get("/getAll",getAllusers)
router.get("/id/:getIduser",getOneusers)
router.post("/add",addOneuser)
router.put("/:idUpdateuser",updateOneUser)
router.delete("/:idDeleteuser",deleteOneuser)
router.get("/email/:getEmail",getonewithemail)

module.exports = router