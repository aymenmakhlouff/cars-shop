const { Sequelize, DataTypes } = require('sequelize');
var sequelize = new Sequelize("cars-store", "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
  console.log('Connection To sequelize has been established successfully');
}).catch((error) => {
  console.log("Unable to connect to the database",error);
})

const User = require("./users.model")(sequelize,DataTypes)
const Historique = require("./historique.model")(sequelize,DataTypes)
const Color = require("./colors.model")(sequelize,DataTypes)
const Category = require("./categories.model")(sequelize,DataTypes)
const Car = require("./cars.model")(sequelize,DataTypes)
const Brand = require("./brands.model")(sequelize,DataTypes)

User.hasMany(Car)
Car.belongsTo(User)

Car.hasMany(Historique)
Historique.belongsTo(Car)

Color.hasMany(Car)
Car.belongsTo(Color)

Category.hasMany(Car)
Car.belongsTo(Category)

Brand.hasMany(Car)
Car.belongsTo(Brand)

// sequelize.sync({ force: true })
// .then(()=>console.log("tables are created"))
// .catch((error)=>console.log(error))

const db = {}
db.User=User
db.Historique=Historique
db.Category=Category
db.Color=Color
db.Car=Car
db.Brand=Brand

module.exports = db
