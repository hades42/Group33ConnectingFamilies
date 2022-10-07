const client = (sequelize, DataTypes) => {
    const Client = sequelize.define("client", {
        Name: DataTypes.STRING
    });
    return Client;
};


import Sequelize from "sequelize";

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        dialect: "postgres"
    }
);

const models = {
    Note: sequelize.import("./clients")
};

Object.keys(models).forEach((key) => {
    if ("associate" in models[key]) {
        models[key].associate(models);
    }
});

export { sequelize };
export default { models, client };