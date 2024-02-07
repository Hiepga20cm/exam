const express = require("express");
const {
  addRoleForUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/user.controller");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();

router.post("/updateRole", requireAuth.isAdmin, addRoleForUser);
router.delete("/deleteUser/:userId", requireAuth.isAdmin, deleteUser);
router.get("/getAll/:userId", requireAuth.isAdmin, getAllUsers);
module.exports = router;
