module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("items", {
    product: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    purchased: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        len: [1]
    }
  }
  });
  return Products;
};