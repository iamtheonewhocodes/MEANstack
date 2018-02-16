'use strict';

import mongoose from 'mongoose';

var UserendpointSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Userendpoint', UserendpointSchema);
