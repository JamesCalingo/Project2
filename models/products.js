module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("Products", {
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
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.CURRENT_DATE,
    validate: {
      len: [1]
  }
}

},
{
  classMethods: {
    associate : function(models) {
      Products.belongsTo(models.Users)
    }
  }
}

);

  return Products;
 };
