const PROXY_CONFIG = [{
  context: [
    "/*",
    "/*/*",
    "/*/*/",
    "/*/*/*",
    "/*/*/*/*"
  ],
  target: "http://localhost:8083/Company/",
  secure: false,
  "logLevel": "debug"
 }]

module.exports = PROXY_CONFIG;
