'use strict'

const express = require('express');
const SwaggerExpress = require('swagger-express-mw');
const appRoot = require('app-root-path').toString();


class SmartApplication {

  constructor() {
    const app = express();

    app.smart = (thing) => {
      return thing;
    }

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

module.exports = SmartApplication;
