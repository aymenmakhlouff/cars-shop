const { Historique } = require("../database-mysql/connection.database.js")

module.exports = {
    getAllhistoriques: async function (req, res) {
        try {
            const getAll = await Historique.findAll()
            res.status(200).send(getAll)
        } catch (error) {
            throw new Error(error)
        }
    },
    getOnehistoriques: async function (req, res) {
        try {
            const getOne = await Historique.findOne({ where: { id: req.params.getIdhistorique } })
            res.status(200).send(getOne)
        } catch (error) {
            throw new Error(error)
        }
    },
    addOnehistorique: async function (req, res) {
        try {
            const addOne = await Historique.create(req.body)
            res.status(201).send(addOne)
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteOnehistorique: async function (req, res) {
        try {
            const deleteOne = await Historique.destroy({ where: { id: req.params.idDeletehistorique } })
            res.json(deleteOne)
        } catch (error) {
            throw new Error(error)
        }
    },
    updateOnehistorique: async function (req, res) {
        try {
            // const target = await historique.findOne({where:{id : req.params.idUpdatehistorique}})
            const updateOne = await Historique.update({ name: req.body.name }, { where: { id: req.params.idUpdatehistorique } })
            res.status(202).send(updateOne)
        } catch (error) {
            throw new Error(error)
        }
    }
    
}

