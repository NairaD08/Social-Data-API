const router = require("express").Router();
const User = require("../models/user");

// GET all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// GET a single user by _id
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id)
    .populate("thoughts")
    .populate("friends");
  res.json(user);
});

// POST a new user
router.post("/", async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
});

// PUT to update a user by _id
router.put("/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedUser);
});

// DELETE to remove user by _id
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

// POST to add a friend
router.post("/:userId/friends/:friendId", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.userId,
    { $addToSet: { friends: req.params.friendId } },
    { new: true }
  );
  res.json(user);
});

// DELETE to remove a friend
router.delete("/:userId/friends/:friendId", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.userId,
    { $pull: { friends: req.params.friendId } },
    { new: true }
  );
  res.json(user);
});

module.exports = router;
