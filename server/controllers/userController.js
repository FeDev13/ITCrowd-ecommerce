const User = require("../models/userModel");

const addUser = async (req, res) => {
  const data = {
    id: req.body.id,
    username: req.body.username,
    password: req.body.password,
    isLogged: req.body.isLogged,
  };

  const user = await User.create(data);
  res.status(200).send(user);
  console.log(user);
};

const getAllUsers = async (request, response) => {
  const user = await User.findAll();

  response.status(200).json(user);
};

module.exports = { addUser, getAllUsers };
