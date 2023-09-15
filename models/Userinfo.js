module.exports = (sequelize, DataTypes) => {
  const Usersinfo = sequelize.define("Usersinfo", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    addressnumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    soi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    road: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subdistrict: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return Usersinfo;
};
