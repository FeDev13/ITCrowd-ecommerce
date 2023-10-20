const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/addUser", userController.addUser);
router.get("/allUsers", userController.getAllUsers);

module.exports = router;
