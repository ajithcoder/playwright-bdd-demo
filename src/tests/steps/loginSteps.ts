import { Given, When, Then } from "../fixtures/fixtures";

Given("User navigates to the application", async ({ loginPage }) => {
  await loginPage.navigateToLogin();
});

Given("User click on the Sign In link", async ({ loginPage }) => {
  await loginPage.clickSignIn();
});

Given(
  "User enter the email-address as {string}",
  async ({ loginPage }, emailAddress: string) => {
    await loginPage.enterEmail(emailAddress);
  }
);

Given(
  "User enter the password as {string}",
  async ({ loginPage }, password: string) => {
    await loginPage.enterPassword(password);
  }
);

When("User click on the login button", async ({ loginPage }) => {
  await loginPage.clickLogin();
});

Then(
  "Login should be success and profile name {string} is displayed",
  async ({ loginPage }, profileName: string) => {
    await loginPage.userLoginSuccessCheck(profileName);
    await loginPage.preserveAuthenticationState();
  }
);

When(
  "Login should fail and the text {string} not visible",
  async ({ loginPage }, profileText: string) => {
    await loginPage.userLoginUnsuccessfulCheck(profileText);
  }
);
