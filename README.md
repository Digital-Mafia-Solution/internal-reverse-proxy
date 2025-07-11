# 🛡️ Internal Reverse Proxy

Reverse proxy server for **internal tools** under `internal.digital-mafia.co.za`.

Handles routing to internal frontend apps (e.g., Task Manager, Customer CMS) and internal API services.

---

## ✨ Features
- Reverse proxies internal frontend apps (from Netlify, GH Pages, etc.)
- Reverse proxies internal backend APIs (from Render or other servers)
- Centralizes routing under a single subdomain
- Built with Node.js, Express, and http-proxy-middleware

---

## 📦 Folder structure
```

internal-reverse-proxy/
├── config/
│   └── proxies.js
├── .env
├── index.js
├── package.json
└── README.md

````

---

## ⚙️ Local development

```bash
git clone https://github.com/YOUR_USERNAME/internal-reverse-proxy.git
cd internal-reverse-proxy
npm install
npm start
````

By default, starts at:

```
http://localhost:5000
```

---

## 🧪 Example routes

| Path                | Target                                         |
| ------------------- | ---------------------------------------------- |
| `/task-manager`     | Task Manager frontend |
| `/user-manager`     | User Manager frontend                          |
| ...                 | Add more as needed |

### Adding a route:  
In the module.exports dictionary at `config/proxies.js` add:
```
path: "/path-to-route",
middleware: createProxyMiddleware({
  target: process.env.TARGET_ROUTE_URL,
  changeOrigin: true,
}),
```
---

## 🌱 Environment variables (`.env`)

| Key                | Example                                  | Purpose                                   |
| ------------------ | ---------------------------------------- | ----------------------------------------- |
| TASK\_MANAGER\_URL | `https://digital-mafia-solution.github.io/task-manager` | Task Manager Frontend target              |
| USER\_MANAGER_\_URL | `https://digital-mafia-solution.github.io/user-manager` | User Manager Frontend target              |
| PORT               | `5000`                                   | Local port (Render overrides with \$PORT) |

---

## ☁️ Deployment (Render.com)

1. Push code to GitHub repo.
2. Create a new Render **Web Service**.
3. Connect repo → set build command:

   ```bash
   npm install
   ```

   and start command:

   ```bash
   npm start
   ```
4. Add environment variables on Render.
5. Add custom domain: `internal.digital-mafia.co.za`.

---

## 🧠 License

MIT — Digital Mafia