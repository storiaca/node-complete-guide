const mongoose = requre("mongoose");
const Schema = mongoose.Shema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    content: {
      type: String,
      require: true
    },
    creator: {
      type: Object,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
