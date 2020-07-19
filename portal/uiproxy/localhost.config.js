const PROXY_CONFIG = [{
  context: [
    "/*",
    "/*/*",
    "/*/*/",
    "/*/*/*",
    "/*/*/*/*"
  ],
  target: "http://localhost:8083/Company/api/v1/",
  secure: false,
  "logLevel": "debug"
 }]

module.exports = PROXY_CONFIG;
