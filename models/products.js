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
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.CURRENT_DATE,
    validate: {
      len: [1]
  }
}
  
  });

  Products.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Products.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Products;
};