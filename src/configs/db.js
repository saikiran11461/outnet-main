const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://saikiran11471:saikiran11471@cluster0.4h8lk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};