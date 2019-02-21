module.exports = (sequelize, DataTypes) => {
    const Wine = sequelize.define('wine', {
      nameOfWine: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      typeOfWine: {
        type: DataTypes.STRING,
        allowNull: false
      },
      year: {
        type: DataTypes.STRING,
        allowNull: false
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      foodPairings: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    })
  
    return Wine;
  }