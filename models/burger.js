module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    // Giving the Author model a name of type STRING
    burger_name: DataTypes.STRING,
      devoured: {
        type: DataTypes.BOOLEAN,
        allownull:false,
        }
    },

    {
        timestamps: false
    },
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
      
    });
  return burgers;
};