const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ArticleSchema = new Schema(
  {
    les_Auteur: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }],
    Titre: {
      type: String,
      required: true,
      
    },
    Theme: {
      type: Schema.Types.ObjectId,
      ref: 'Theme'
    },
    les_mots_clés: [{
      type: String 
    }],
    Resumer: {
      type: String,
      required: true,
    },
    Article_Pdf: {
      data: Buffer,
      contentType: String,
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
