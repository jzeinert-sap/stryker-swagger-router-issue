module.exports = function(config) {
  config.set({
    mutator: "javascript",
    mutate: [
      'express-app.js',
      'api/controllers/controller.js'
    ],
    packageManager: "npm",
    reporters: ["html"],
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "off"
  });
};
