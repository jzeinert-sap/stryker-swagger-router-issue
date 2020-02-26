'use strict'

const express = require('express');
const SwaggerExpress = require('swagger-express-mw');
const appRoot = require('app-root-path').toString();


class Application {

  constructor() {
    const app = express();

    app.smart = (thing) => {
      return thing;
    }

    app.get('/endpoint', function (re, res) {
      return res.status(200).json({
          key: 'value'
      });
    });

    return app;
  }

  static async init(app) {
    await new Promise((resolve, reject) => {
        SwaggerExpress.create({ appRoot: appRoot }, (err, swaggerExpress) => {
            if (err) {
                reject(err);
            }
            swaggerExpress.register(app);
            resolve();
        });
    });
  }

}

module.exports = Application;
