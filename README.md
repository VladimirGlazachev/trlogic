# trlogic

HOW TO INSTALL
docker-compose up -d 

application hello world: 
http://yourip:81

Metrics are provided from self NodeJS module
http://yourip:81/metrics 

Metrics are provided throuch nodeexporter:
http://yourip:9090/metrics

Prometheus targets:
http://yourip:9090/targets

GRAFANA:
http://yourip:3000/?orgId=1  admin / admin

Grafana Dashboards:
Dashboard for Nodejs, i have prepared two test grafics, 1) from nodeexporter cpu 2) from nodejs application "used heap" 
http://yourip:3000/d/BxXdcjlmz/dashboard-for-nodejs?orgId=1
CPU is execeuted through function "irate"


