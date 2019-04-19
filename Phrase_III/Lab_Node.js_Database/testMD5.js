var crypto = require('crypto');
var md5 = crypto.createHash("md5");
md5.update("TEST123");
var result = md5.digest('hex');
console.log(result);
// 22b75d6007e06f4a959d1b1d69b4c4bd
// 12345678901234567890123456789012




