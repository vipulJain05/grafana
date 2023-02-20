# Enable logging and insert to monitoring tool
Follow the steps to install grafana and api service which will help to see logs from grafana UI:

- clone the repository https://github.com/vipulJain05/grafana
- start Kubernetes service like AWS EKS, minikube for local with the help of `minikube start` command. Follow the steps mentioned on [https://minikube.sigs.k8s.io/docs/start](https://minikube.sigs.k8s.io/docs/start) to install minikube if it is not installed on local.
- To enable grafana service on the cluster, edit the `values.yaml` file under loki-stack folder and find the `grafana` section, and update the value from `false` to `true`.
- To install `grafana/loki` which will help to retrieve logs of services running on cluster, run `helm install loki-stack .`. This will install loki and grafana on the cluster.
- Check the running services with the help of the `kubectl get all` command.
- After every pod are up and running, run the command `kubectl -n loki get secret loki-stack-grafana -o yaml` to get the password of grafana.
- Copy admin password and decode it with the help of the `echo "[admin_password]" | base64 -d` command.
- Run `kubectl -n loki port-forward svc/loki-stac-grafana 3000:80` command for port forwarding so we can access grafana UI.
- Open the browser and run `localhost:3000` to run grafana. Login into the grafana using `admin` for username and use the same password which we have decoded earlier.

## Configure the Data source with grafana

- Select `Data Sources` section under the `Configuration` section and select `Loki` from the list. Make sure that the URL under HTTP section should be `http://loki-stack:3100` and click on the `Save and Test` button. It should return `Data source connected and labels found` after clicking on the save button.

## Install API service on minikube using Helm
- Make sure that minikube is up and running using the `minikube status` command, it should return like this
> minikube
type: Control Plane
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured
- Install the api service on minikube, run `helm install smartjoules .` under api-logging folder.
- This will create the service with the help of `chittababu/dockerimage` docker image which is available on the docker hub.

## Watch Logs of different services
-   Press 'Explore'
-   In the top bar select `Loki`
-   Press `Log browser`
-   Select `namespace` section and `pod`
-   Select `smart-joules-api-logging` under the pods section and check the logs.
-   Press `Show logs`.

# Enable logging and insert to monitoring tool
Follow the steps to install grafana and api service which will help to see logs from grafana UI:

- clone the repository https://github.com/vipulJain05/grafana
- start Kubernetes service like AWS EKS, minikube for local with the help of `minikube start` command. Follow the steps mentioned on [https://minikube.sigs.k8s.io/docs/start](https://minikube.sigs.k8s.io/docs/start) to install minikube if it is not installed on local.
- To enable grafana service on cluster, edit the `values.yaml` file under loki-stack folder and find `grafana` section and update the value from `false` to `true`.
- To install `grafana/loki` which will help to retrieve logs of services running on cluster, run `helm install loki-stack .`. This will install loki and grafana on the cluster.
- Check the running services with the help of `kubectl get all` command.
- After all pods are up and running, run command `kubectl -n loki get secret loki-stack-grafana -o yaml` to get the password of grafana.
- Copy admin password and decode it with the help of `echo "[admin_password]" | base64 -d` command.
- Run `kubectl -n loki port-forward svc/loki-stac-grafana 3000:80` command for port forwarding so we can access grafana UI.
- Open the browser and run `localhost:3000` to run grafana. Login into the grafana using `admin` for username and use the same password which we have decoded earlier.

## Configure the Data source with grafana

- Select `Data Sources` section under the `Configuration` section and select `Loki` from the list. Make sure that the URL under http section should be `http://loki-stack:3100` and click on `Save and Test` button. It should retrun `Data source connected and labels found` after click on the save button.

## Install api service on minikube using Helm
- Make sure that minikube is up and running using `minikube status` command, it should return like this
> minikube
type: Control Plane
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured
- Install the api service on minikube, run `helm install smartjoules .` under api-logging folder.
- This will create the service with the help of `chittababu/dockerimage` docker image which is availale on docker hub.

## Watch Logs of different services
-   Press 'Explore'
-   In top bar select `Loki`
-   Press `Log browser`
-   Select `namespace` section and `pod`
-   Select `smart-joules-api-logging` under pods section and check the logs.
-   Press `Show logs`.


