module.exports = function(config) {
  config.set({
    mutator: "javascript",
    mutate: [
      'smartapp.js',
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
