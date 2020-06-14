const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ArticleSchema = new Schema(
  {
    les_Auteur: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    Titre: {
      type: String,
      required: true,
    },
    Theme: {
      type: String,
      required: true,
    },
    les_mots_clés: [{ type: Srting }],
    Resumer: {
      type: String,
      required: true,
    },
    Article_Pdf: {
      type: String,
      required: true, 
    },
    chercheurId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    ConferenceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "conference",
    },
  },
  {
    timestamps: true,
  }
);

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
