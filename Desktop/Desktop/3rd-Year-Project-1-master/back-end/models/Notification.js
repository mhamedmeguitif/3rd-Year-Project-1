/*
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const NotificationSchema = new Schema(
    {

    },{timestamps: true,}
  );
  var Notif = mongoose.model("Notification", NotificationSchema);
module.exports = Notif;