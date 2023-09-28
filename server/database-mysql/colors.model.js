module.exports = (sequelize, DataTypes) => {
    const Color = sequelize.define("colors", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Color
}