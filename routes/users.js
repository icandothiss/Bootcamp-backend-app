const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const User = require("../models/User");

const router = express.Router({ mergeParams: true });

const advancedresults = require("../middleware/advancedresults");

const { protect, authorize } = require("../middleware/auth");

// Anything below this use protect and authorize as middleware, it gets included automatically
router.use(protect);
router.use(authorize("admin"));

router.route("/").get(advancedresults(User), getUsers).post(createUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
