const Classes = require("../../../src/classes");

var block = new Classes.Block(__dirname);
block.type = "math_number_property";
block.default = true;
block.extra = block.readShadows();

module.exports = block;