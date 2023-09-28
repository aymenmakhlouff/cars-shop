module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define("Brands", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Brand
}