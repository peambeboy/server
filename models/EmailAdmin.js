module.exports = (sequelize, DataTypes) => {

    const Email = sequelize.define("Email", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Email
};