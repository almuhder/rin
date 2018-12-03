"use strict";
module.exports = (sequelize, DataTypes) => {
  const Founder = sequelize.define(
    "Founder",
    {
      name: DataTypes.STRING
    },
    {
      tableName: "founders"
    }
  );
  Founder.associate = function(models) {
    Founder.belongsToMany(models.Project, { through: "ProjectFounder" });
  };
  return Founder;
};
