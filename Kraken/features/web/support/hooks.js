const { After, Before,AfterStep,BeforeStep,BeforeAll } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const {existsSync, mkdirSync} = require("fs");

var counter=0;
Before(async function() {
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

AfterStep(async function(scenario) {
  console.log("##############"+counter);
  let escenarioPath = "./reports/screenshots/"+scenario.pickle.name.replace(/\s/g, '');
  if (!existsSync(escenarioPath)) {
      mkdirSync(escenarioPath, { recursive: true });
  }
  await this.driver.saveScreenshot("./reports/screenshots/" + 
      scenario.pickle.name.replace(/\s/g, '') + "/Paso_" + counter + ".png")
});

BeforeStep(async function(scenario) {
  counter = counter + 1;
});

BeforeAll(async function() {
  counter = 0;
});