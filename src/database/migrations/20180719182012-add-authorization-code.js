const tableName = 'Receipts'
const columnName = 'authorization_code'

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn(tableName, columnName, {
      type: Sequelize.STRING,
      allowNull: true,
    }),

  down: queryInterface =>
    queryInterface.removeColumn(tableName, columnName),
}
