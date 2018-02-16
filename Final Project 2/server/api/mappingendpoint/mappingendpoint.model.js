'use strict';

import mongoose from 'mongoose';

var MappingendpointSchema = new mongoose.Schema({
  mydate: String,
  original_title:String,
  TheatreName:String,
  TheatreLocation:String,
  city:String,
  time:String,
  info: String
});

export default mongoose.model('Mappingendpoint', MappingendpointSchema);
