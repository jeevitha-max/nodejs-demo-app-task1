# Node.js Demo App - DevOps Task 1

## Objective
Automate code deployment using a CI/CD pipeline with GitHub Actions.

## Tools
- GitHub
- GitHub Actions
- Node.js
- Docker
- Docker Hub

## Pipeline
GitHub Push (main)
        |
        v
Checkout Code
        |
        v
Setup Node.js
        |
        v
npm ci
        |
        v
npm test
        |
        v
Docker Build
        |
        v
Docker Hub Login
        |
        v
Docker Image Push

## Run locally

```bash
npm install
npm test
npm start
```

Open: http://localhost:3000

## Docker

```bash
docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app
```

## GitHub Secrets

Create these repository secrets:
- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN

The workflow triggers on every push to the `main` branch.

## Interview Questions

1. What is CI/CD?
2. How do GitHub Actions work?
3. What are runners?
4. Difference between jobs and steps.
5. How to secure secrets in GitHub Actions?
6. How to handle deployment errors?
7. Explain the Docker build-push workflow.
8. How can you test a CI/CD pipeline locally?
