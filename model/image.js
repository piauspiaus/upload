const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  file_path: {
    type: String,
    required: true,
  },
  file_mimetype: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

imageSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

imageSchema.set("toJSON", {
  virtuals: true,
});

exports.Image = mongoose.model("Image", imageSchema);
