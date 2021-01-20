const express = require('express');
const path = require('path');
const { createServer } = require('http');
const next = require('next');

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  conf: {
    webpack: config => {
      config.devtool = false;
      config.node = {
        fs: 'empty'
      }

      for (const r of config.module.rules) {
        if(r.loader === 'babel-loader') {
          r.options.sourceMaps = false;
        }
      }

      return config;
    }
  }
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(3000, err => {
    if (err) throw  err;
    console.log('Ready  on localhost 3000');
  });
});

//app.use(express.static(path.resolve('client', 'build')));
