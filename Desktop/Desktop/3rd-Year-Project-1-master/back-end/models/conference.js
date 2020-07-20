const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ConfSchema = new Schema({
   NameOfConference: {
      type : String,
      required : true, 
      unique : true 
   },
   NameOfCompany: {
      type : String,
      required : true
   },
   TheDeadline: {
      type : Date,
      required : true
   },
   LittleDefinitionOfCompany: {
      type : String,
      required : true
   },
   AboutCompany: {
      type : String,
      required : true
   },
   TheThemes: [{
      type : Schema.Types.ObjectId , 
      ref : 'Theme'
   }],
   Eligibility: {
      type: String,
      required : true
   },
   Funding: {
      type : String  , 
      required : true
   },
   ConditionOfApplicant: {
      type : String,
      required : true
   },
   OpportunityInformation: {
      type : String,
      required : true
   },
   EducationalConditions: {
      type : String,
      required : true
   },
   ConditionOfArtical: {
      type : String,
      required : true
   },
   ConferenceOwner: {
          type : Schema.Types.ObjectId ,
          ref : 'User'  
   }, 
   Valide : {
      type : Boolean ,
      default : false
   },
   ReadingCommitee: [String]
}, {
   timestamps: true,

});

var ConfSchema1 = mongoose.model('conference', ConfSchema);
module.exports = ConfSchema1;