'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

//const client = require('prom-client');
//const collectDefaultMetrics = client.collectDefaultMetrics;
// Probe every 5th second.
//collectDefaultMetrics({ prefix: 'webapp_' });

// Initialize Prometheus exporter
const prom = require('prom-client');

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello worlds\n');
});

// Export Prometheus metrics from /metrics endpoint
app.get('/metrics', function(req, res) {
res.end(prom.register.metrics());
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
