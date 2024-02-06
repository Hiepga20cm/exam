const mongoose = require("mongoose");
const mcqQuestSchema = new mongoose.Schema(
    {
      contestId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contest",
        required: true,
      },
      question: {
        type: String,
        required: true,
      },
      options: {
        type: [String],
        required: true,
      },
      correctOption: {
        type: String,
        required: true,
      },
      imageBase64 : {
        type: String,
    }
    }
  );
  module.exports = mongoose.model("MCQQuest", mcqQuestSchema);