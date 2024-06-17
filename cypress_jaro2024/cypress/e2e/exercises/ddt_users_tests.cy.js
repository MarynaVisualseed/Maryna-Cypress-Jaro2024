import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Data Driven Tests - Create users", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickUsers();
  });
});
