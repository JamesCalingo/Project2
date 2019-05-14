module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Items", {
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
      defaultValue: false
    }
  });
  return Item;
};