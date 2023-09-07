const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    entry: {
      type: String,
      required: true,
    },
    shipIsBroken: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Logs = new mongoose.model("Logs", logsSchema);
module.exports = Logs