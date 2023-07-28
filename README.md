# minikube-minilearn

Laboratorio de prueba para la ejecucion de un microservicio en minikube

## Comandos
### Minikube
```bash
minikube start
```

### Image build
```bash
docker build -f .docker/Dockerfile -t drc288/minikube-minilab:0.0.1 .
```

### K8s deployments source
```bash
 kubectl create deployment ms-test-basicservice --image drc288/minikube-minilab:0.0.1
```

### Validar deployment

```bash
 kubectl get deployment
```

### Expose del service
```bash
kubectl expose deployment ms-test-basicservice --type=LoadBalancer --port 8080
```

### Expose en minikube
```bash
minikube service ms-test-basicservice
```