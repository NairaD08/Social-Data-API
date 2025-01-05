const mongoose = require("mongoose"); // JS package 
const { Schema } = mongoose;  //Object destructuring . Mongoose is an object we are pulling schema from there

const UserSchema = new Schema({   //new.mongoose.schema   UserSchema is an object   when we use new it means to create new schema from schema factory
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  thoughts: [ //thoughts is an array []
    {
      type: Schema.Types.ObjectId, //similar to primary key
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

// Virtual for friend count
UserSchema.virtual("friendCount").get(function () { //not stored in the db. calculated when we get to the data
  return this.friends.length;
});

const User = mongoose.model("User", UserSchema);  //model or class from schema
module.exports = User;


//jS representation of data. noSQL uses documents.

// Class or contractor function when Capital letter