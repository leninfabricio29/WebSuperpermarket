const sequelize = require("./datebase");


  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Conectado a la base");
    })
    .catch((error) => {
      console.log("Error");
    });
  sequelize.authenticate;

  