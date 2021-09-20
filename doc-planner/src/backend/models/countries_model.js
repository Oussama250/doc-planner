const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// {Schema} = mongoose   --- the same as above.

const userSchema = new Schema ({
    country: {type : String, required : true}
  });
  //, {
  //  timestamps: true,
  //}

const country = mongoose.model("countries", userSchema);
module.exports = country;