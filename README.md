# 🌹 Aishwarya's Love Page

> A romantic webpage by **Arun Kumar** for **Aishwarya** — married 23.08.2024 💕

---

## 📁 Project Structure

```
aishwarya-webpage/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← GitHub Actions pipeline
├── k8s/
│   ├── deployment.yaml       ← Kubernetes deployment
│   └── service.yaml          ← Kubernetes service
├── nginx/
│   └── nginx.conf            ← Nginx web server config
├── src/
│   ├── index.js              ← JS entry point (webpack starts here)
│   ├── index.html            ← HTML template
│   └── styles/
│       └── main.scss         ← Global SCSS styles
├── html/                     ← Built output (auto-generated, don't edit)
│   └── index.html            ← The actual love page
├── public/                   ← Static assets (favicon, images)
├── .babelrc                  ← Babel config
├── .eslintrc.json            ← ESLint config
├── .gitignore                ← Git ignore rules
├── .prettierrc               ← Prettier formatter config
├── Dockerfile                ← Docker build instructions
├── package.json              ← npm dependencies & scripts
├── postcss.config.js         ← PostCSS config
└── webpack.config.js         ← Webpack bundler config
```

---

## 🚀 Run Locally (Development)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (auto-opens browser at localhost:3000)
npm run dev
```

---

## 🏗️ Build for Production

```bash
npm run build
# Output goes to /html folder
```

---

## 🐳 Run with Docker

```bash
# Build the Docker image
docker build -t aishwarya-webpage:latest .

# Run the container
docker run -p 8080:80 aishwarya-webpage:latest

# Open browser at:
# http://localhost:8080
```

---

## ☸️ Deploy to Minikube

```bash
# 1. Start Minikube
minikube start --driver=docker

# 2. Point Docker to Minikube
eval $(minikube docker-env)

# 3. Build image inside Minikube
docker build -t aishwarya-webpage:latest .

# 4. Deploy
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

# 5. Get the URL
minikube service aishwarya-webpage-service --url
```

---

## 🤖 GitHub Actions (Auto Deploy)

Every time you push to `main`, GitHub Actions will:
1. Install dependencies
2. Lint & test code
3. Build the project
4. Build Docker image
5. Deploy to Minikube
6. Print the live URL

---

*Made with 💕 by Arun Kumar — Always & Forever*
