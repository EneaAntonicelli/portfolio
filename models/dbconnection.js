// DATABASE CODE - WILL ADD LATER. NOT NEEDED AT THIS TIME




// var mongoose = require("mongoose");

// // Save a reference to the Schema constructor
// var Schema = mongoose.Schema;

// var UserSchema = new Schema({
  
//   firstName: {
//     type: String,
//     trim: true,
//     required: "First Name is Required"
//   },

//   lastName: {
//     type: String,
//     trim: true,
//     required: "Last Name is Required"
//   },

//   username: {
//     type: String,
//     trim: true,
//     required: "Username is Required"
//   },
//   // `password` must be of type String
//   // `password` will trim leading and trailing whitespace before it's saved
//   // `password` is a required field and throws a custom error message if not supplied
//   // `password` uses a custom validation function to only accept values 6 characters or more
//   password: {
//     type: String,
//     trim: true,
//     required: "Password is Required",
//     validate: [
//       function(input) {
//         return input.length >= 6;
//       },
//       "Password should be longer."
//     ]
//   },
//   // `email` must be of type String
//   // `email` must be unique
//   // `email` must match the regex pattern below and throws a custom error message if it does not
//   // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
//   email: {
//     type: String,
//     unique: true,
//     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
//   },
//   // `date` must be of type Date. The default value is the current date
//   userCreated: {
//     type: Date,
//     default: Date.now
//   },
//   // `lastUpdated` must be of type Date
//   lastUpdated: Date,
//   // `fullName` must be of type String
//   fullName: String
// });

// // Custom Instance Methods

// // Custom method `setFullName`
// UserSchema.methods.setFullName = function() {
//   // Set the current user's `fullName` to their `firstName` and their `lastName` together
//   this.fullName = this.firstName + " " + this.lastName;
//   // Return the new `fullName`
//   return this.fullName;
// };

// // Custom method `lastUpdatedDate`
// UserSchema.methods.lastUpdatedDate = function() {
//   // Set the current user's `lastUpdated` property to the current date/time
//   this.lastUpdated = Date.now();
//   // Return this new date
//   return this.lastUpdated;
// };

// // This creates our model from the above schema, using mongoose's model method
// var User = mongoose.model("User", UserSchema);

// // Export the User model
// module.exports = User;
