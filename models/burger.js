module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    // Giving the Author model a name of type STRING
    burger_name: {
      type: DataTypes.STRING,
      allownull:false,
      validate: {len: [1] }
      },

    devoured: {
      type: DataTypes.BOOLEAN,
      allownull:false,
      validate: {len: [1] }
      }
  },
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {

      
    });
  return burgers;
};