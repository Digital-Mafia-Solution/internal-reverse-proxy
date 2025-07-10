const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = [
  {
    path: "/task-manager",
    middleware: createProxyMiddleware({
      target: process.env.TASK_MANAGER_URL,
      changeOrigin: true,
      pathRewrite: { "^/task-manager": "" },
    }),
  },
];
