const mongoose = require("mongoose");
// schema design
const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a valid name for the tour"],
    unique: [true, "Tour name should be unique"],
    minLength: [3, "Tour name must be at least 3 letters"],
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price cannot be negative value"],
  },
  image: {
    type: String,
    required: true,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
});

//Model
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
