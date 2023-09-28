const {User} = require("../database-mysql/connection.database.js") 

module.exports = {
    getAllusers: async function (req, res) {
        try {
            const getAll = await User.findAll()
            res.status(200).send(getAll)
        } catch (error) {
            throw new Error(error)
        }
    },
    getOneusers: async function (req, res) {
        try {
            const getOne = await User.findOne({ where: { id: req.params.getIduser } })
            res.status(200).send(getOne)
        } catch (error) {
            throw new Error(error)
        }
    },
    addOneuser: async function(req,res){
        try {
          const addOne = await User.create(req.body)
          res.status(201).send(addOne)  
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteOneuser: async function(req,res){
        try {
          const deleteOne = await User.destroy({where:{id:req.params.idDeleteuser}})
          res.json(deleteOne)  
        } catch (error) {
            throw new Error(error)
        }
    },
    updateOneUser: async function(req,res){
        try {
            // const target = await User.findOne({where:{id : req.params.idUpdateuser}})
            const updateOne = await User.update({name : req.body.name},{where:{id : req.params.idUpdateuser}})
          res.status(202).send(updateOne)  
        } catch (error) {
            throw new Error(error)
        }
    },
    getonewithemail: async function (req, res) {
        try {
            const getemail = await User.findOne({ where: { email: req.params.getEmail } })
            res.status(200).send(getemail)
        } catch (error) {
            throw new Error(error)
        }
}
}
