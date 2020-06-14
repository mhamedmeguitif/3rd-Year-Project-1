const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ConfSchema = new Schema({
 Location: {
  type: String,
  required: true
 },
 Sponsors: {
  type: [String],
 },
 Nom:{
  type: String,
  required: true
 },
 
 NBRp :{
  type: Number,
  required: true
 },
 DUREE: {
  type: Number, 
  required: true 
 },
 COUT: {
  type: Number,
  required: true
 },
 TOPICS : {
  type: [String],
  required: true
 },
 TEL: {
    type: Number,
    required: true  
 },
 laProcedureSoumissionArticles: {
  type: String,
  required: true
 }, 
 company: {
    type: String,
    required : true
 }, 
EmailCompany: {
    type: String,
    required: true
   }  , 
Proprietaire_conference : {
   type :   mongoose.Schema.Types.ObjectId , 
   ref  :  'User' 
}
}, {
 timestamps: true
});

var ConfSchema1 = mongoose.model('conference', ConfSchema);
module.exports = ConfSchema1;