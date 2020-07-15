const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Themes = new Schema({
   NameOfTheme: {
      type: String,
      required: true
   },
   Description: {
      type: String,
      required: true
   }
}, {
   timestamps: true,

});

var ThemesSchema = mongoose.model('Theme', Themes);
module.exports = ThemesSchema;