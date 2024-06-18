export class MainPage {
  constructor() {
    this.loginOrRegisterButton = 'ul[id="customer_menu_top"] li a';
    this.url = "https://automationteststore.com/";
    // this.buttonContinue = 'button[title="Continue"]';
    // this.buttonContinue = 'a[title="Continue"]';
  }

  openAutoStore() {
    cy.visit(this.url);
    return this;
  }
  clickLoginOrRegister() {
    cy.get(this.loginOrRegisterButton).click();
    return this;
  }

  //   clickContinue() {
  //     cy.get(this.continueButton).click();
  //     return this;
  //   }
}
