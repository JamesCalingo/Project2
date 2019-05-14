module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: false
    }
  });
  return User;
};