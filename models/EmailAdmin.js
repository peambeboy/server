module.exports = (sequelize, DataTypes) => {

    const Email = sequelize.define("Email", {
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Email
};