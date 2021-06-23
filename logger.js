var url = "http://mylogger.io/log";
function loging(mess) {
  console.log(mess);
}

loging("hi");

module.exports.log = loging;
