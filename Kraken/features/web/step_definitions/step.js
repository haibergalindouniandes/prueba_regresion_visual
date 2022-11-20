const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$('input[type="email"]');
  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$('input[type="password"]');
  return await element.setValue(password);
});

When("I click login", async function () {
  let element = await this.driver.$('button[type="submit"]');
  return await element.click();
});

When("I go to posts", async function () {
  let element = await this.driver.$('a[href="#/posts/"]');
  element.click();
});

When("I click to new post", async function () {
  let element = await this.driver.$(
    'a[class="ember-view gh-btn gh-btn-green"]'
  );
  element.click();
});

When("I enter title {kraken-string}", async function (title) {
  let element = await this.driver.$(
    'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]'
  );
  return await element.setValue(title);
});

When("I write the post {kraken-string}", async function (content) {
  let element = await this.driver.$(
    'div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]'
  );
  return await element.setValue(content);
});

When("I click review", async function () {
  await this.driver.refresh();
});

When("I navigate to settings", async function () {
  await this.driver.refresh();
});

When("I go to staff", async function () {
  await this.driver.refresh();
  let element = this.driver.$('a[href="#/staff/"]');
  return await element.click();
});

When("I click button invitePeople", async function () {
  await this.driver.refresh();
  let element = await this.driver.$('button[data-ember-action-27="27"]');
  //let element = await this.driver.$('button[class="gh-btn gh-btn-green" data-ember-action data-ember-action-27="27"]');
  return await element.click();
});

When("I enter email invite {kraken-string}", async function (email) {
  let element = await this.driver.$('input[name="email"]');
  return await element.setValue(email);
});

When("I click radioButton1", async function () {
  let element = await this.driver.$('option[value="6379577c820fe70001a554ef"]');
  return await element.click();
});

When("I click button SendInvitation", async function () {
  let element = await this.driver.$(
    'button[class="gh-btn gh-btn-green gh-btn-icon ember-view"]'
  );
  return await element.click();
});

When("I go to pages", async function () {
  let element = await this.driver.$('a[href="#/pages/');
  element.click();
});

When("I click on new page", async function () {
  let element = await this.driver.$(
    'a[class="ember-view gh-btn gh-btn-green"]'
  );
  return await element.click();
});

When("I type the page title", async function () {
  let element = await this.driver.$(
    'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]'
  );
  return await element.setValue("New Page");
});

When("I click page settings button", async function () {
  let element = await this.driver.$('button[class="post-settings"]');
  return await element.click();
});

When("I click publish button", async function () {
  let element = await this.driver.$(
    'div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]'
  );
  return await element.click();
});

When("I click final review button", async function () {
  await this.driver.refresh();
});

When("I click publish now button", async function () {
  let element = await this.driver.$('//span[contains(text(),"Publish")]');
  return await element.click();
});

// Edit profile information
When("I click avatar", async function () {
  let element = await this.driver.$("//div[@class='gh-user-avatar relative']");
  element.click();
});

When("I click profile {kraken-string}", async function (profile) {
  let users = profile.split('@');
  let element = await this.driver.$('a[href="#/staff/'+ users[0] +'/"]');
  return await element.click();
});

When("I enter random full name {kraken-string}", async function (fullName) {
  let element = await this.driver.$("//input[@id='user-name']");
  return await element.setValue(fullName);
  // return await element.setValue(fullNameProfile);
});

When("I enter random slug {kraken-string}", async function (slug) {
  let users = slug.split('@');
  let element = await this.driver.$("//input[@id='user-slug']");
  return await element.setValue(users[0]);
});

When("I enter random location {kraken-string}", async function (location) {
  let element = await this.driver.$("//input[@id='user-location']");
  return await element.setValue(location);
});

When("I enter random website {kraken-string}", async function (website) {
  let element = await this.driver.$("//input[@id='user-website']");
  return await element.setValue(website);
});

When("I enter random bio information {kraken-string}", async function (bio) {
  let element = await this.driver.$("//textarea[@id='user-bio']");
  return await element.setValue(bio);
});

When("I click profile save", async function () {
  let element = await this.driver.$("//span[normalize-space()='Save']");
  element.click();
});

When("I reload the page", async function () {
  await this.driver.refresh();
});

Then("I see the profile with name {kraken-string}", async function (fullName) {
  await this.driver.refresh(); 
});

//Delete page
When('I click pages', async function () {
  let element = await this.driver.$('(//a[@href="#/pages/"])[1]');
  element.click();
});

When('I select first page', async function () {
  let element = await this.driver.$("(//a//h3[@class='gh-content-entry-title'])[1]");
  element.click();
});

When('I click page settings', async function () {
  let element = await this.driver.$('button[class="post-settings"]');
  element.click();
});

When('I click delete page', async function () {
  let element = await this.driver.$('//span[normalize-space()="Delete page"]');
  element.click();
});

When('I click confirm delete page', async function () {
  let element = await this.driver.$('//span[normalize-space()="Delete"]');
  element.click();
});