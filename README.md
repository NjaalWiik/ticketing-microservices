# ticketing-microservices
 A StubHub inspired app, build with microservices.

How to run kubernetes app:
1. Open docker desktop app.
2. Run in terminal:
   code /etc/hosts
3. In the file that opened with the last command, add a line with and save:
   127.0.0.1 ticketing.dev
4. Run in terminal:
   kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.40.2/deploy/static/provider/cloud/deploy.yaml
5. Go into root folder:
   skaffold dev
6. In chrome go to:
   ticketing.dev