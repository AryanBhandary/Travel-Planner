const mongoose = require('mongoose');

const travelerSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: true, 
    trim: true },

  lastName:  { 
    type: String, 
    required: true, 
    trim: true },

  email:     { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true },

  number:    { 
    type: String, 
    required: true, 
    trim: true },

  password:  { 
    type: String, 
    required: true },

  role:      { type: String, 
    enum: ['traveler', 'provider', 'admin'], 
    default: 'traveler' },
    
}, 
{
  timestamps: true
});

module.exports = mongoose.model('Traveler', travelerSchema);

