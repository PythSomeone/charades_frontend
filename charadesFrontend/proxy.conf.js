const PROXY_CONFIG = [{
  context: [
    "/api/**"
  ],
  target: "http://0.0.0.0:3000",
  secure: false,
  "logLevel": "debug"
}];module.exports = PROXY_CONFIG;
