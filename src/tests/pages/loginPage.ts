import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  public readonly signInButtonLocator: Locator;
  public readonly emailAddressLocator: Locator;
  public readonly passwordLocator: Locator;
  public readonly loginButtonLocator: Locator;
  public readonly profileSection: Locator;

  constructor(public page: Page) {
    this.signInButtonLocator = page.locator('[data-test="nav-sign-in"]');
    this.emailAddressLocator = page.locator('[data-test="email"]');
    this.passwordLocator = page.locator('[data-test="password"]');
    this.loginButtonLocator = page.locator('[data-test="login-submit"]');
    this.profileSection = page.locator('[data-test="nav-menu"]');
  }

  async navigateToLogin(){
    await this.page.goto("/");
  }

  async clickSignIn() {
    await expect(this.signInButtonLocator).toBeVisible();
    await this.signInButtonLocator.click();
    await expect(this.emailAddressLocator).toBeVisible();
  }

  async enterEmail(email: string) {
    await expect(this.emailAddressLocator).toBeVisible();
    await this.emailAddressLocator.fill(email);
  }

  async enterPassword(password: string) {
    await expect(this.passwordLocator).toBeVisible();
    await this.passwordLocator.fill(password);
  }

  async clickLogin() {
    await expect(this.loginButtonLocator).toBeVisible();
    await this.loginButtonLocator.click();
  }

  async userLoginSuccessCheck(profileName: string) {
    await expect(this.page.getByTestId("login-error")).not.toBeVisible();
    await expect(this.profileSection).toHaveText(profileName);
  }

  async userLoginUnsuccessfulCheck(profileText: string) {
    await expect(
      this.page.locator(`[data-test="page-title"]:has-text("${profileText}")`)
    ).not.toBeAttached();
    await expect(this.page.getByTestId("login-error")).toBeVisible();
  }
}
