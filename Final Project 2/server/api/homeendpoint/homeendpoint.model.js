'use strict';

import mongoose from 'mongoose';

var HomeendpointSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Homeendpoint', HomeendpointSchema);
