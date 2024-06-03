const mongoose = require("mongoose");
const transactionSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "Please enter amount!!!"],
    },
    type: {
      type: String,
      required: [true, "Please enter type!!!"],
    },
    date: {
      type: Date,
      required: [true, "Please enter date!!!"],
    },
    category: {
      type: String,
      required: [true, "Please enter category!!!"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Please enter description!!!"],
    },
  },
  { timestamps: true }
);
const transactionmodel = mongoose.model("transactions", transactionSchema);
module.exports = transactionmodel;
