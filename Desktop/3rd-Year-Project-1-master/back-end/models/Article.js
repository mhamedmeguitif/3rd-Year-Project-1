const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ArticleSchema = new Schema(
  {
    les_Auteur: [{
      type: String 
    }],
    Titre: {
      type: String,
      required: true,
      
    },
    Theme: {
      type:String
    },
    les_mots_cles: [{
      type: String 
    }],
    Resumer: {
      type: String,
      required: true,
    },
    Article_Pdf: {
      type : String , 
      default : "" 
    },
    chercheurId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    ConferenceId: {
      type: Schema.Types.ObjectId,
      ref: 'conference',
    },
    Final :  {
      types : Boolean , 
      default : false 
    }
  },
    
  {
    timestamps: true,
  }
);

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
