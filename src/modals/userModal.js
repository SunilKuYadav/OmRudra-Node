const mongooes = require("mongoose");

let userSchema = new mongooes.Schema({
  name: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongooes.model("user", userSchema);
