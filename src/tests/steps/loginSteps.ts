import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("User navigates to the application", async ({ page }) => {
  await page.goto("/");
});

Given("User click on the Sign In link", async ({ page }) => {
  await page.locator('[data-test="nav-sign-in"]').click();
});

Given(
  "User enter the email-address as {string}",
  async ({ page }, emailAddress: string) => {
    await page.locator('[data-test="email"]').fill(emailAddress);
  }
);

Given(
  "User enter the password as {string}",
  async ({ page }, password: string) => {
    await page.locator('[data-test="password"]').fill(password);
  }
);

When("User click on the login button", async ({ page }) => {
  await page.locator('[data-test="login-submit"]').click();
});

Then("Login should be success", async ({ page }) => {
  await expect(page.locator('[data-test="nav-menu"]')).toContainText(
    "Jane Doe"
  );
  await expect(page.locator('[data-test="page-title"]')).toContainText(
    "My account"
  );
});

When("Login should fail", async ({ page }) => {
    await expect(page.locator('[data-test="page-title"]:has-text("My Account")')).not.toBeAttached();
    await expect(page.getByTestId('login-error')).toBeVisible();
});
