const {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers/user");
const { verifyToken, verifyUser,verifyAdmin } = require("../utils/verifyToken");

const router = require("express").Router();

router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers);
router.delete("/:id",verifyUser, deleteUser);
router.put("/:id",verifyUser, updateUser);

module.exports = router;
