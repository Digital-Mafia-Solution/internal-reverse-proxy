# Reverse Proxy for Digital Mafia APIs

Node.js + Express reverse proxy for Digital Mafia API microservices.

Combines multiple backend services (hosted on Render) under a single API domain with clean path-based routing:

- `/task-manager` → Task Manager API

Built with:
- [Express](https://expressjs.com/) – lightweight HTTP server
- [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware) – reverse proxy logic
- [dotenv](https://www.npmjs.com/package/dotenv) – manage config with environment variables

---

## 📦 **Project structure**

```plaintext
reverse-proxy/
├── index.js                 # Main server file
├── package.json
├── .env                     # Local config (never commit!)
├── config/
│   └── proxies.js           # Proxy rules
├── .gitignore
└── README.md
