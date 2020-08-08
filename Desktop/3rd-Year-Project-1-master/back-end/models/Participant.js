/*
========
he na le 9ebelhom Owner Bah yeparticipant 
======= 
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PartisipantSchema = new Schema(
    {
      IdChercheur :[{
        type : Schema.Types.ObjectId ,
        ref : 'User'
      }] , 
      IdConference : {
       type : Schema.Types.ObjectId,
       ref : 'conference'
      }, 

    },{timestamps: true,}
  );
  var Participant = mongoose.model("partisipant", PartisipantSchema);
module.exports = Participant;