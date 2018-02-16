'use strict';

import mongoose from 'mongoose';

var BookingendpointSchema = new mongoose.Schema({
  mydate: String,
  time: String,
  original_title: String,
  myyear: String,
  city: String,
  selectSeatId:String,
TheatreName: String,
TheatreLocation:String
});

export default mongoose.model('Bookingendpoint', BookingendpointSchema);
