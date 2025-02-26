import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/loginPage';

export type types = {
    loginPage: LoginPage
}

export const test = base.extend<{loginPage : LoginPage}>({
    loginPage: async ({ page }, use) => {
      const loginPage = new LoginPage(page)
      await use(loginPage)
    }
  });
  
export const { Given, When, Then } = createBdd(test);
  // export const expect = test.expect;