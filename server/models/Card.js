const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  desc: String,
  filesize: String,
  close: Boolean,
  tag: {
    isOpen: Boolean,
    tagTitle: String,
    tagColor: String
  }
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
