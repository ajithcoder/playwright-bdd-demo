import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import fs from 'fs';

export class LoginPage {
  public readonly signInButtonLocator: Locator;
  public readonly emailAddressLocator: Locator;
  public readonly passwordLocator: Locator;
  public readonly loginButtonLocator: Locator;
  public readonly profileSection: Locator;
  public context: BrowserContext;

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

  async preserveAuthenticationState(profileName: string){
    const storagePath = `.auth/${profileName}.json`;
    if (fs.existsSync(storagePath)) {
      fs.unlinkSync(storagePath);
    }
    if (!fs.existsSync(storagePath)) {
      this.context = await this.page.context();
      await this.context.storageState({ path: storagePath });
    } else {
      const cookies = await JSON.parse(fs.readFileSync(storagePath, 'Utf-8'));
      await this.page.context().addCookies(cookies.cookies);
    }
  }

  async userLoginUnsuccessfulCheck(profileText: string) {
    await expect(
      this.page.locator(`[data-test="page-title"]:has-text("${profileText}")`)
    ).not.toBeAttached();
    await expect(this.page.getByTestId("login-error")).toBeVisible();
  }
}
 