const Classes = require("../../src/classes");

var block = new Classes.Block(__dirname);
block.type = "text";
block.default = true;

module.exports = block;