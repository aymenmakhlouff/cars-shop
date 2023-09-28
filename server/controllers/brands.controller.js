const {Brand} = require("../database-mysql/connection.database.js") 

module.exports = {
    getAllbrands: async function (req, res) {
        try {
            const getAll = await Brand.findAll()
            res.status(200).send(getAll)
        } catch (error) {
            throw new Error(error)
        }
    },
    getOnebrands: async function (req, res) {
        try {
            const getOne = await Brand.findOne({ where: { id: req.params.getIdbrand } })
            res.status(200).send(getOne)
        } catch (error) {
            throw new Error(error)
        }
    },
    addOnebrand: async function(req,res){
        try {
          const addOne = await Brand.create(req.body)
          res.status(201).send(addOne)  
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteOnebrand: async function(req,res){
        try {
          const deleteOne = await Brand.destroy({where:{id:req.params.idDeletebrand}})
          res.json(deleteOne)  
        } catch (error) {
            throw new Error(error)
        }
    },
    updateOnebrand: async function(req,res){
        try {
            // const target = await brand.findOne({where:{id : req.params.idUpdatebrand}})
            const updateOne = await Brand.update({name : req.body.name},{where:{id : req.params.idUpdatebrand}})
          res.status(202).send(updateOne)  
        } catch (error) {
            throw new Error(error)
        }
    }
}
