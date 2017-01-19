var fs = require("fs");
var gd = require("gd");
var QRCode = require("./");

var opt = {
    width: 800,
    height: 800
};
var qrcode = new QRCode(opt);

var imgbase = qrcode.makeCode("http://fibjs.org/");
fs.writeFile("test.jpg", imgbase.getData(gd.JPEG));
