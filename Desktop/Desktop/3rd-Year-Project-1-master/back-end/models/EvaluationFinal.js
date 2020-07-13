/*

Dans cette section, nous enregistrons l'évaluation finale 
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EvaluationFinalSchema = new Schema({
  IdArticle: {
    type: Schema.Types.ObjectId , 
    ref : 'Article'
  }, 
  Evaluations : [{
    type: Schema.Types.ObjectId,
    ref: "Evaluation",
  }], 
  IdConference: {
    type: Schema.Types.ObjectId,
    ref: "conference",
  },
  IdThemes: {
    type: Schema.Types.ObjectId,
    ref: "Theme",
  },
  
  Note: {
    type: Number,
    required: true,
  },
  Remarque: {
    type: String,
    default: "",
  },
}, { timestamps: true });
var EvaluationFinal = mongoose.model("EvaluationFinal", EvaluationFinalSchema);
module.exports = EvaluationFinal;