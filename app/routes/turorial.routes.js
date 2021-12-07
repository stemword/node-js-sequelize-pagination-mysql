module.exports = (app) => {
  const expense_user = require("../controllers/expenseuser.controller.js");
  var router = require("express").Router();
  router.get("/parties", expense_user.findAll);
  app.use("/api", router);
  app.use("*", (req, res) => res.status(404).json({ error: "not found" }));
};
