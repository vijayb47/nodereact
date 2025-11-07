I've created a complete full-stack application repository with:
Key Components:

Backend (Node.js/Express):

Simple REST API with health check endpoint
Dockerfile for containerization
Listens on port 3001


Frontend (React):

React app that fetches data from backend
Multi-stage Dockerfile with Nginx
Nginx configured to proxy API requests to backend


Kubernetes Manifests:

Separate deployments for frontend and backend
Services (LoadBalancer for frontend, ClusterIP for backend)
Health checks and resource limits


GitHub Actions Pipeline:

Builds and pushes Docker images to Docker Hub
Deploys to AKS cluster
Uses git commit SHA for image tagging



To use this:

Set up Azure resources (AKS cluster)
Set up Docker Hub token
Create a service principal and add credentials to GitHub Secrets
Update the workflow environment variables with your ACR name, resource group, and cluster name
Push to main branch to trigger deployment

The application follows best practices with health checks, resource limits, proper service separation, and automated CI/CD. Once deployed, the frontend will be accessible via a LoadBalancer IP, and it will communicate with the backend internally within the cluster.