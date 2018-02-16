'use strict';

import mongoose from 'mongoose';

var SeatbookingSchema = new mongoose.Schema({
  Seat: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Seatbooking', SeatbookingSchema);
