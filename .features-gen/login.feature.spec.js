// Generated from: src\tests\features\login.feature
import { test } from "../src/tests/fixtures/fixtures.ts";

test.describe('User Authentication tests', () => {

  test.beforeEach('Background', async ({ Given, loginPage, And }) => {
    await Given('User navigates to the application', null, { loginPage }); 
    await And('User click on the Sign In link', null, { loginPage }); 
  });
  
  test('Login should be success', async ({ And, loginPage, When, Then }) => { 
    await And('User enter the email-address as "customer@practicesoftwaretesting.com"', null, { loginPage }); 
    await And('User enter the password as "welcome01"', null, { loginPage }); 
    await When('User click on the login button', null, { loginPage }); 
    await Then('Login should be success and profile name "Jane Doe" is displayed', null, { loginPage }); 
  });

  test('Login should not be success', async ({ Given, loginPage, When, But }) => { 
    await Given('User enter the email-address as "customer@practicesoftwaretest.com"', null, { loginPage }); 
    await Given('User enter the password as "Passtest"', null, { loginPage }); 
    await When('User click on the login button', null, { loginPage }); 
    await But('Login should fail and the text "My Account" not visible', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\tests\\features\\login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigates to the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User click on the Sign In link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And User enter the email-address as \"customer@practicesoftwaretesting.com\"","stepMatchArguments":[{"group":{"start":32,"value":"\"customer@practicesoftwaretesting.com\"","children":[{"start":33,"value":"customer@practicesoftwaretesting.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And User enter the password as \"welcome01\"","stepMatchArguments":[{"group":{"start":27,"value":"\"welcome01\"","children":[{"start":28,"value":"welcome01","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User click on the login button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Login should be success and profile name \"Jane Doe\" is displayed","stepMatchArguments":[{"group":{"start":41,"value":"\"Jane Doe\"","children":[{"start":42,"value":"Jane Doe","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigates to the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User click on the Sign In link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given User enter the email-address as \"customer@practicesoftwaretest.com\"","stepMatchArguments":[{"group":{"start":32,"value":"\"customer@practicesoftwaretest.com\"","children":[{"start":33,"value":"customer@practicesoftwaretest.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given User enter the password as \"Passtest\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Passtest\"","children":[{"start":28,"value":"Passtest","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When User click on the login button","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"But Login should fail and the text \"My Account\" not visible","stepMatchArguments":[{"group":{"start":31,"value":"\"My Account\"","children":[{"start":32,"value":"My Account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end