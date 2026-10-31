const { PositionsSchema } = require("../schema/PositionsSchema");
const { model } = require("mongoose");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };
