const mongoose = require("mongoose");

// here user model /schema
const user = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: false },
  email: { type: String, require: true },
  username: { type: String, require: true },
  likedSongs: { type: [String], require: false ,default:[]},
  likedPlaylists: { type: [String], require: false ,default:[]},
  subscribeArtist  :{type:[String],require:false,default:[]}
});
