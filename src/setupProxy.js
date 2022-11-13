const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/word",
    createProxyMiddleware({
      target: "https://random-words-api.vercel.app/",
      changeOrigin: true,
    })
  );
};
