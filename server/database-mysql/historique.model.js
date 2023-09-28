module.exports = (sequelize, DataTypes) => {
    const Historique = sequelize.define("historique", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        agent: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        sellerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    })
    return Historique
}