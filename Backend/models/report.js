module.exports = (sequelize, DataTypes) => {
  const report = sequelize.define('report', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    what: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    who: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    time: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    details: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(1),
      allowNull: true,
    }
  });

  report.associate = (models) => {
    report.belongsTo(models.user, {foreignKey: 'userID'});
    report.belongsTo(models.perpetrator, {foreignKey: 'perpetratorID'})
  };

  return report;
};
