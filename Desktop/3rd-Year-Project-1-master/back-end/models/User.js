const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new Schema(
  {
    prenom: {
      type: String,
      required: true,
    },

    nom_de_famille: {
      type: String,
      required: true,
    },
    Pays: {
      type: String,
      required: true,
    },
   
    Email: {
      type: String,
      required: true,
    },
    Domaine : {
      type: String,
      required: true,
    },
    specialite: {
      type: String,
      required: true,
    },
    Etablissement: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },

  
    compagnie: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(passportLocalMongoose);
var Users = mongoose.model("User", UserSchema);
module.exports = Users;
