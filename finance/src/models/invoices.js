'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Invoices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Invoices.belongsTo(models.Payments, {
        foreignKey: {
          name: 'paymentId',
        },
      });
    }
  }
  Invoices.init({
    descricao: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'Invoices',
  });
  return Invoices;
};
