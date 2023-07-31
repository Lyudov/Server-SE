const mongoose = require("mongoose");

const energySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    requred: true,
  },
  price: {
    type: Number,
    requred: true,
  },
  image: {
    type: String,
    requred: true,
  },
  material: {
    type: String,
    requred: true,
  },
  _ownerId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Theme = mongoose.model("Theme", energySchema);

module.exports = Theme;
