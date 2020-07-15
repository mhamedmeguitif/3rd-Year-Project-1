/*
======

Dans cette section, nous enregistrons la demande du chercheur de participer à la conférence, 
qui sera ensuite traitée par le propriétaire de la conférence
====
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DemandSchema = new Schema(
    {
     IdChercheur : {
       type : Schema.Types.ObjectId ,
       ref : 'User'
     }, 
     IdConference : {
      type : Schema.Types.ObjectId,
      ref : 'conference'
     }, 

    },{timestamps: true,}
  );
  var Demand = mongoose.model("Demand", DemandSchema);
module.exports = Demand;