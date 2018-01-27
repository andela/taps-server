export default (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'There is no description for this team'
    },
    userId: DataTypes.INTEGER
  });

  Team.associate = (models) => {
    Team.hasMany(models.Membership, {
      foreignKey: 'teamId',
      as: 'memberships'
    });
  };

  return Team;
};
