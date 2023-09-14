module.exports = (sequelize, DataTypes) => {
    const Usersinfo = sequelize.define("Usersinfo", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      addressnumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      soi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      road: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subdistrict: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      district: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postcode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Usersinfo;
  };
  