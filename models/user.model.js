const mongoose = require('mongoose');
const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        // User object will have a roles array that contains ids in roles collection as reference.        
        // This kind is called Reference Data Models or Normalization.
        roles:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: "Role",
            }
        ]
    })
);
module.exports = User;