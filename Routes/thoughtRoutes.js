const router = require("express").Router();
const Thought = require("../models/thoughts.js");
const User = require("../models/user.js");

// GET all thoughts
router.get("/", async (req, res) => {
  const thoughts = await Thought.find(); //using though model to get all the thoughts 
  res.json(thoughts);
});

// GET a single thought by _id
router.get("/:id", async (req, res) => {
  const thought = await Thought.findById(req.params.id);
  res.json(thought);
});

// POST to create a new thought
router.post("/", async (req, res) => {
  const newThought = await Thought.create(req.body);

  // Push the created thought's _id to the associated user's thoughts array field
  await User.findByIdAndUpdate(req.body.userId, {
    $push: { thoughts: newThought._id },
  });

  res.json(newThought);
});

// PUT to update a thought by _id
router.put("/:id", async (req, res) => {
  const updatedThought = await Thought.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedThought);
});

// DELETE to remove a thought by _id
router.delete("/:id", async (req, res) => {
  await Thought.findByIdAndDelete(req.params.id);
  res.json({ message: "Thought deleted" });
});

// POST to create a reaction stored in a single thought's reactions array field
router.post("/:thoughtId/reactions", async (req, res) => {
  const thought = await Thought.findByIdAndUpdate(
    req.params.thoughtId,
    { $push: { reactions: req.body } },
    { new: true } //configuration object 
  );
  res.json(thought);
});

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.delete("/:thoughtId/reactions/:reactionId", async (req, res) => {
  const thought = await Thought.findByIdAndUpdate(
    req.params.thoughtId,
    { $pull: { reactions: { reactionId: req.params.reactionId } } },
    { new: true }
  );
  res.json(thought);
});

module.exports = router;
