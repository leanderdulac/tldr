module.exports = (sequelize, DataTypes) => {
  const Receipt = sequelize.define('Receipt', {
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    receipt_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    seller_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    seller_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transaction_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    card_holder_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    card_number_last_digits: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    card_brand: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    installments: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cvm_pin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    payment_method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    capture_method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    authorization_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    aid: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    application_cryptogram: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    soft_descriptor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    statement_descriptor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    underscored: true,
    defaultScope: {
      attributes: {
        exclude: ['created_at', 'updated_at', 'id'],
      },
    },
  })

  return Receipt
}
