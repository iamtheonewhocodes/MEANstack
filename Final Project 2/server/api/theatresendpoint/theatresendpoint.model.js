'use strict';

import mongoose from 'mongoose';

var TheatresendpointSchema = new mongoose.Schema({
TheatreName: String,
TheatreLocation: String,
city: String
});

export default mongoose.model('Theatresendpoint', TheatresendpointSchema);
