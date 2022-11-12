const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://random-words-api.vercel.app/",
      changeOrigin: true,
    })
  );
};
