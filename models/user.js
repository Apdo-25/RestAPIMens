const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for User

let userSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
    created_at: {type: Date, default: Date.now}
   
});  



// Virtual for user's full name
userSchema
.virtual('name')
.get(function () {
    return this.family_name + ', ' + this.first_name;
});

// Virtual for user's URL
userSchema
.virtual('url')
.get(function () {
    return '/catalog/user/' + this._id;
});



// Export the model
module.exports = mongoose.model('User', userSchema);
