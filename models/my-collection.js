const mongoose = require('mongoose');

// REF Activities 7.4-collections-mongoose

const mySchema = new mongoose.Schema({

});

const My = mongoose.model('My', mySchema);

module.exports = My;
// const vinylSchema = new mongoose.Schema({
//   artist: [{ type: String}],
//   album: String,
//   songs: {
//     aSide: [{type: String}],
//     bSide: [{type: String}]
//   },
//   release: { type: Date },
//   size: Number
// });
//
// const Vinyl = mongoose.model('Vinyl', vinylSchema);
//
// module.exports = Vinyl;
