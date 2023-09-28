const {Color} = require("../database-mysql/connection.database.js") 

module.exports = {
    getAllcolors: async function (req, res) {
        try {
            const getAll = await Color.findAll()
            res.status(200).send(getAll)
        } catch (error) {
            throw new Error(error)
        }
    },
    getOnecolors: async function (req, res) {
        try {
            const getOne = await Color.findOne({ where: { id: req.params.getIdcolor } })
            res.status(200).send(getOne)
        } catch (error) {
            throw new Error(error)
        }
    },
    addOnecolor: async function(req,res){
        try {
          const addOne = await Color.create(req.body)
          res.status(201).send(addOne)  
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteOnecolor: async function(req,res){
        try {
          const deleteOne = await Color.destroy({where:{id:req.params.idDeletecolor}})
          res.json(deleteOne)  
        } catch (error) {
            throw new Error(error)
        }
    },
    updateOnecolor: async function(req,res){
        try {
            // const target = await color.findOne({where:{id : req.params.idUpdatecolor}})
            const updateOne = await Color.update({name : req.body.name},{where:{id : req.params.idUpdatecolor}})
          res.status(202).send(updateOne)  
        } catch (error) {
            throw new Error(error)
        }
    }
}
