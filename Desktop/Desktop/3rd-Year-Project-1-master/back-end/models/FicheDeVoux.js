/*
===========
Conf --- Evaluateur -- Owner 
===========

 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const VouxSchema = new Schema(
    {
   
    IdEvaluateur : {
      type: Schema.Types.ObjectId,
      ref: "conference",
    },
    ArticleSelect : [{
      type: Schema.Types.ObjectId,
      ref: "Article",
    }] , 


    },{timestamps: true,}
  );
  var Voux = mongoose.model("Voux", VouxSchema);
module.exports = Voux;