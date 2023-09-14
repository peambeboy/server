module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      detail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // เพิ่มฟิลด์รูปภาพ
      ImageData: {
        type: DataTypes.BLOB('long'),
        allowNull: true, // กำหนดเป็น true หากคุณต้องการให้รูปภาพเป็นทางเลือก
      },
      ImageMimeType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    return Posts;
  };
  