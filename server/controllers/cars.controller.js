const {Car} = require("../database-mysql/connection.database.js") 
const { Op } = require('sequelize')


module.exports = {
    getAllcars: async function (req, res) {
        try {
            const getAll = await Car.findAll()
            res.status(200).send(getAll)
        } catch (error) {
            throw new Error(error)
        }
    },
    getOnecars: async function (req, res) {
        try {
            const getOne = await Car.findOne({ where: { id: req.params.getIdcar } })
            res.status(200).send(getOne)
        } catch (error) {
            throw new Error(error)
        }
    },
    addOnecar: async function(req,res){
        try {
          const addOne = await Car.create(req.body)
          res.status(201).send(addOne)  
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteOnecar: async function(req,res){
        try {
          const deleteOne = await Car.destroy({where:{id:req.params.idDeletecar}})
          res.json(deleteOne)  
        } catch (error) {
            throw new Error(error)
        }
    },
    updateOnecar: async function(req,res){
        try {
            // const target = await car.findOne({where:{id : req.params.idUpdatecar}})
            const updateOne = await Car.update(req.body,{where:{id : req.params.idUpdatecar}})
          res.status(202).send(updateOne)  
        } catch (error) {
            throw new Error(error)
        }
    },
    getAllOther: async function (req, res) {
        try {
            const getAll = await Car.findAll(({
                where: { userId: {[Op.notLike]: req.params.notUser}} 
            }))
            res.status(200).send(getAll)
        } catch (error) {
            throw new Error(error)
        }
    },
    getAllusercars: async function (req, res) {
        try {
            const getAll = await Car.findAll({where:{userId:req.params.idProfile}})
            res.status(200).send(getAll)
        } catch (error) {
            throw new Error(error)
        }
    },
     getSearch: async function (req, res) {
        try {
            const getAll = await Car.findAll(({
                where: { userId: {[Op.notLike]: req.params.notUser}} 
            },{where:{name:req.params.na}}))
            res.status(200).send(getAll)
        } catch (error) {
            throw new Error(error)
        }
    }
}
