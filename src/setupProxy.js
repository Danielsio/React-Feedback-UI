import createProxyMiddleware from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/feedback",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
