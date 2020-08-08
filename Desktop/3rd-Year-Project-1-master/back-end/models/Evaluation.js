/*

Dans cette section, nous enregistrons l'évaluation de l'evaluateur 
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EvaluationSchema = new Schema(
  {
    IdEvaluateur: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    IdConference: {
      type: Schema.Types.ObjectId,
      ref: "conference",
    },
    IdThemes: {
      type: Schema.Types.ObjectId,
      ref: "Theme",
    },
    IdArticle: {
      type: Schema.Types.ObjectId,
      ref: "Article",
    },
    Note: {
      type: Number,
      required: true,
    },
    Remarque: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
var Evaluation = mongoose.model("Evaluation", EvaluationSchema);
module.exports = Evaluation;
