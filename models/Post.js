module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Detail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        URLPicture: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Posts
};