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
    'a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]'
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
  let element = await this.driver.$(
    'button[class="gh-btn gh-btn-editor gh-editor-preview-trigger"]'
  );
  return await element.click();
});

//When("I navigate to settings", async function () {
//  let element = await this.driver.$(
//    'a[class="ember-view gh-nav-bottom-tabicon"]'
//  );
//  return element.click();
//});

//When("I go to staff", async function () {
//  await this.driver.refresh();
//  let element = await this.driver.$("#ember29");
//  return await element.click();
//});

//When("I click button invitePeople", async function () {
//  await this.driver.refresh();
//  let element = await this.driver.$('button[class="gh-btn gh-btn-primary"]');
//  return await element.click();
//});

//When("I enter email invite {kraken-string}", async function (email) {
//  let element = await this.driver.$('input[name="email"]');
//  return await element.setValue(email);
//});

//When("I click radioButton1", async function () {
//  let element = await this.driver.$('div[class="gh-radio active"]');
//  return await element.click();
//});

//When("I click button SendInvitation", async function () {
//  let element = await this.driver.$(
//    'button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]'
//  );
//  return await element.click();
//});

When("I click in members", async function () {
  await this.driver.refresh();
  let element = await this.driver.$("#ember20");
  return await element.click();
});

//When("I click in new member", async function () {
//  await this.driver.refresh();
//  let element = await this.driver.$("#ember31");
//  return await element.click();
//});

//When(
//  "I imput a new member {kraken-string}, {kraken-string}, {kraken-string}, {kraken-string}",
//  async function (name, email, label, note) {
//    await this.driver.refresh();
//    let element1 = await this.driver.$('input[name="name"]');
//    let element2 = await this.driver.$('input[name="email"]');
//    let element3 = await this.driver.$(
//      'input[class="ember-power-select-trigger-multiple-input"]'
//    );
//    let element4 = await this.driver.$('textarea[name="note"]');
//    let element = await this.driver.$(
//      'button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]'
//    );
//    await element1.setValue(name);
//    await element2.setValue(email);
//    await element3.setValue(label);
//    await element4.setValue(note);
//    return await element.click();
//  }
//);

//When("I click in first member exist", async function () {
//  await this.driver.refresh();
//  let element = await this.driver.$(
//    'h3[class="ma0 pa0 gh-members-list-name "]'
//  );
//  return await element.click();
//});

/*let element = await this.driver.$('a[id="ember54"] h3[class="ma0 pa0 gh-members-list-name "]');
a[id='ember56'] h3[class='ma0 pa0 gh-members-list-name ']*/

//When(
//  "I edit an exists member {kraken-string}, {kraken-string}, {kraken-string}",
//  async function (name, label, note) {
//    await this.driver.refresh();
//    let element1 = await this.driver.$("#member-name");
//    let element2 = await this.driver.$(
//      "#ember-power-select-trigger-multiple-input-ember35"
//    );
//    let element3 = await this.driver.$("#member-note");
//    let element = await this.driver.$('button[id="ember31"] span');
//    await element1.setValue(name);
//    await element2.setValue(label);
//    await element3.setValue(note);
//    return await element.click();
//  }
//);

//When("I click in Membersettings", async function () {
//  await this.driver.refresh();
//  let element = await this.driver.$("#ember29");
//  return await element.click();
//});

//When("I click in DeleteMember", async function () {
//  let element = await this.driver.$("li:nth-child(2) button:nth-child(1)");
//  return await element.click();
//});

//When("I confirm Delete Member", async function () {
//  let element = await this.driver.$("#ember55");
//  return await element.click();
//});

//When("I select first Active user", async function () {
//  await this.driver.refresh();
//  let element = await this.driver.$(
//    'a[id="ember45"] article[class="apps-card-app"]'
//  );
//  return await element.click();
//});

When(
  "I change password {kraken-string} and {kraken-string}",
  async function (old_pass, new_pass) {
    await this.driver.refresh();
    let element1 = await this.driver.$('input[autocomplete="current-password"]');
    let element2 = await this.driver.$('input[autocomplete="new-password"]');
    let element3 = await this.driver.$('input[id="user-new-password-verification"]');
    await element1.setValue(old_pass);
    await element2.setValue(new_pass);
    await element3.setValue(new_pass);
    let element = await this.driver.$('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]');
    return await element.click();
  }
);



When("I navigate to settings", async function () {
    let element = await this.driver.$(
      'a[class="ember-view gh-nav-bottom-tabicon"]'
    );
    return element.click();
  });
  
  When("I go to staff", async function () {
    await this.driver.refresh();
    let element = await this.driver.$('a[href="#/settings/staff/"]');
    return await element.click();
  });
  
  When("I click button invitePeople", async function () {
    await this.driver.refresh();
    let element = await this.driver.$('button[class="gh-btn gh-btn-primary"]');
    return await element.click();
  });
  
  When("I enter email invite {kraken-string}", async function (email) {
    let element = await this.driver.$('input[name="email"]');
    return await element.setValue(email);
  });
  
  When("I click radioButton1", async function () {
    let element = await this.driver.$('div[class="gh-radio active"]');
    return await element.click();
  });
  
  When("I click button SendInvitation", async function () {
    let element = await this.driver.$(
      'button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]'
    );
    return await element.click();
  });
  
  //When("I click in members", async function () {
  //  await this.driver.refresh();
  //  let element = await this.driver.$("#ember20");
  //  return await element.click();
  //});
  
  When("I click in new member", async function () {
    await this.driver.refresh();
    let element = await this.driver.$('a[class="ember-view gh-btn gh-btn-primary"]');
    return await element.click();
  });
  
  When(
    "I imput a new member {kraken-string}, {kraken-string}, {kraken-string}, {kraken-string}",
    async function (name, email, label, note) {
      await this.driver.refresh();
      let element1 = await this.driver.$('input[id="member-name"]');
      let element2 = await this.driver.$('input[id="member-email"]');
      let element3 = await this.driver.$('input[class="ember-power-select-trigger-multiple-input"]'
      );
      let element4 = await this.driver.$('textarea[name="note"]');
      let element = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]'
      );
      await element1.setValue(name);
      await element2.setValue(email);
      await element3.setValue(label);
      await element4.setValue(note);
      return await element.click();
    }
  );
  
  When("I click in first member exist", async function () {
    await this.driver.refresh();
    let element = await this.driver.$('a[href="#/members/63716d3dc1fc535148b4de47/"');
    return await element.click();
  });
  
  /*let element = await this.driver.$('a[id="ember54"] h3[class="ma0 pa0 gh-members-list-name "]');
  a[id='ember56'] h3[class='ma0 pa0 gh-members-list-name ']*/
  
  When(
    "I edit an exists member {kraken-string}, {kraken-string}, {kraken-string}",
    async function (name, label, note) {
      await this.driver.refresh();
      let element1 = await this.driver.$("#member-name");
      let element2 = await this.driver.$(
        "#ember-power-select-trigger-multiple-input-ember35"
      );
      let element3 = await this.driver.$("#member-note");
      let element = await this.driver.$('button[id="ember31"] span');
      await element1.setValue(name);
      await element2.setValue(label);
      await element3.setValue(note);
      return await element.click();
    }
  );
  
  When("I click in Membersettings", async function () {
    await this.driver.refresh();
    let element = await this.driver.$("#ember29");
    return await element.click();
  });
  
  When("I click in DeleteMember", async function () {
    let element = await this.driver.$("li:nth-child(2) button:nth-child(1)");
    return await element.click();
  });
  
  When("I confirm Delete Member", async function () {
    let element = await this.driver.$("#ember55");
    return await element.click();
  });
  
  When("I select first Active user", async function () {
    await this.driver.refresh();
    let element = await this.driver.$('a[class="ember-view"]');
    return await element.click();
  });
  
  //When(
  //  "I change password {kraken-string} and {kraken-string}",
  //  async function (old_pass, new_pass) {
  //    await this.driver.refresh();
  //    let element1 = await this.driver.$("#user-password-old");
  //    let element2 = await this.driver.$("#user-password-new");
  //    let element3 = await this.driver.$("#user-new-password-verification");
  //    await element1.setValue(old_pass);
  //    await element2.setValue(new_pass);
  //    await element3.setValue(new_pass);
  //    let element = await this.driver.$('button[id="ember60"] span');
  //    return await element.click();
  //  }
  //);
  

//Jorge

When('I click on a published post', async function() {
    let element = await this.driver.$('a[class="ember-view permalink gh-list-data gh-post-list-title"]');
    return await element.click();
});

When('I click settings button', async function () {
    let element = await this.driver.$('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]');
    return await element.click();
});

When('I click delete button', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]');
    return await element.click();
});

When('I click confirmation button', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    return await element.click();
});

When('I surf by the post', async function () {
    let element = await this.driver.$('a[href="#/site/"]');
    return await element.click();
});

//List pages
When('I go to pages', async function () {
  let element = await this.driver.$('a[href="#/pages/');
  element.click();
});

Then('I see list of pages', async function () {
  let elements = await this.driver.$$("li.gh-list-row.gh-posts-list-item.gh-posts-list-item-labs.gh-post-list-plain-status");
  let listExist = elements.length > 0;
  expect(listExist).to.equal(true);
});

// Invite people
When('I go to settings', async function () {
  let element = await this.driver.$('a[href="#/settings/');
  element.click();
});

When('I go to staff settings', async function () {
  let element = await this.driver.$('a[href="#/settings/staff/');
  element.click();
});

When('I click invite people', async function () {
  let element = await this.driver.$('button.gh-btn.gh-btn-primary');
  element.click();
});

When('I enter random email invitation {kraken-string}', async function (email) {
  let element = await this.driver.$('input#new-user-email.email.ember-text-field.gh-input.ember-view');
  return await element.setValue(email);
});

When('I select the administrator option', async function () {
  let element = await this.driver.$("//div[normalize-space()='Administrator']");
  element.click();
});

When('I click send invitation now', async function () {
  let element = await this.driver.$('button.gh-btn.gh-btn-black.gh-btn-icon.ember-view');
  element.click();
});

Then('I see the invitation {kraken-string}', async function (email) {
  let element = await this.driver.$$(`//h3[normalize-space()='${email}']`);
  let invitatioSent = element.length > 0;
  expect(invitatioSent).to.equal(true);
});

//Edit twitter card
When('I click expand twitter card', async function () {
  let element = await this.driver.$("//div[contains(@class,'gh-viewport')]//div//div[2]//section[1]//div[2]//div[1]//button[1]//span[1]");
  element.click();
});

When('I enter random twitter title {kraken-string}', async function (title) {
  let element = await this.driver.$("//input[@id='twitterTitle']");
  return await element.setValue(title);
});

When('I enter random twitter description {kraken-string}', async function (description) {
  let element = await this.driver.$("//textarea[@id='twitterDescription']");
  return await element.setValue(description);
});

When('I click save changes of the twitter card', async function () {
  let element = await this.driver.$("//span[normalize-space()='Save']");
  element.click();
});

Then('I see the twitter card changes made {kraken-string}, {kraken-string}', async function (title, description) {
  let elementTwitterTitle = await this.driver.$$(`//div[@class="gh-social-twitter-preview-title"][normalize-space()='${title}']`);
  let existsTitle = elementTwitterTitle.length > 0;
  expect(existsTitle).to.equal(true);
  let elementTwitterDesc = await this.driver.$$(`//div[@class="gh-social-twitter-preview-desc"][normalize-space()='${description}']`);
  let existsDescription = elementTwitterDesc.length > 0;
  expect(existsDescription).to.equal(true);
});

// Edit profile information
When('I click avatar', async function () {
  let element = await this.driver.$("//div[@class='gh-user-avatar relative']");
  element.click();
});

When('I click profile', async function () {
  let element = await this.driver.$("(//a[normalize-space()='Your profile'])[1]");
  element.click();
});

When('I enter random full name {kraken-string}', async function (fullName) {
  let element = await this.driver.$("//input[@id='user-name']");
  return await element.setValue(fullName);
  // return await element.setValue(fullNameProfile);
});

When('I enter random slug {kraken-string}', async function (slug) {
  let element = await this.driver.$("//input[@id='user-slug']");
  return await element.setValue(slug);
});

When('I enter random location {kraken-string}', async function (location) {
  let element = await this.driver.$("//input[@id='user-location']");
  return await element.setValue(location);
});

When('I enter random website {kraken-string}', async function (website) {
  let element = await this.driver.$("//input[@id='user-website']");
  return await element.setValue(website);
});

When('I enter random bio information {kraken-string}', async function (bio) {
  let element = await this.driver.$("//textarea[@id='user-bio']");
  return await element.setValue(bio);
});

When('I click profile save', async function () {
  let element = await this.driver.$("//span[normalize-space()='Save']");
  element.click();
});

When('I reload the page', async function () {
  await this.driver.refresh();
});

Then('I see the profile with name {kraken-string}', async function (fullName) {
  let elementFullname = await this.driver.$$(`//h2[@class="gh-canvas-title"][normalize-space()='${fullName}']`);
  let existsFullname = elementFullname.length > 0;
  expect(existsFullname).to.equal(true);
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
  let element = await this.driver.$('//button[contains(@title,"Settings")]//span');
  element.click();
});

When('I click delete page', async function () {
  let element = await this.driver.$('//button[@class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]');
  element.click();
});

When('I click confirm delete page', async function () {
  let element = await this.driver.$('//span[normalize-space()="Delete"]');
  element.click();
});


  