const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GratitudeSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  quote: String,
  date: { type: Date, default: Date.now }
});

const Gratitude = mongoose.model("Gratitude", GratitudeSchema);

module.exports = Gratitude;
