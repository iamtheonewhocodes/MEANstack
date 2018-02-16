'use strict';

import mongoose from 'mongoose';

var SearchmoviesendpointSchema = new mongoose.Schema({
poster_path: String,
original_title:String,
release_date:String,
genres:Array,
runtime: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Searchmovies', SearchmoviesendpointSchema);
