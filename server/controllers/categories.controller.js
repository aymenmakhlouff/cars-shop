const {Category} = require("../database-mysql/connection.database.js") 

module.exports = {
    getAllcategories: async function (req, res) {
        try {
            const getAll = await Category.findAll()
            res.status(200).send(getAll)
        } catch (error) {
            throw new Error(error)
        }
    },
    getOnecategories: async function (req, res) {
        try {
            const getOne = await Category.findOne({ where: { id: req.params.getIdcategory } })
            res.status(200).send(getOne)
        } catch (error) {
            throw new Error(error)
        }
    },
    addOnecategory: async function(req,res){
        try {
          const addOne = await Category.create(req.body)
          res.status(201).send(addOne)  
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteOnecategory: async function(req,res){
        try {
          const deleteOne = await Category.destroy({where:{id:req.params.idDeletecategory}})
          res.json(deleteOne)  
        } catch (error) {
            throw new Error(error)
        }
    },
    updateOnecategory: async function(req,res){
        try {
            // const target = await category.findOne({where:{id : req.params.idUpdatecategory}})
            const updateOne = await Category.update({name : req.body.name},{where:{id : req.params.idUpdatecategory}})
          res.status(202).send(updateOne)  
        } catch (error) {
            throw new Error(error)
        }
    }
}
