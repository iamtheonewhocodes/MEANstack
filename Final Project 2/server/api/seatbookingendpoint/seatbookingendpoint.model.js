'use strict';

import mongoose from 'mongoose';

var SeatbookingendpointSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Seatbookingendpoint', SeatbookingendpointSchema);
