const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Smash Burgers', 'Loaded Fries', 'Shakes', 'Combos'],
  },
  price: {
    type: Number,
    required: true,
  },
  badge: {
    type: String,
    enum: ['Bestseller', 'Must Try', 'Chef\'s Special', 'Popular', 'Value', ''],
    default: '',
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '🍔',
  },
  available: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
