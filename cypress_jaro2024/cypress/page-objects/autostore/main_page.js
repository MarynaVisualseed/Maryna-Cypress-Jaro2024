export class MainPage {
  constructor() {
    this.loginOrRegisterButton = 'ul[id="customer_menu_top"] li a';
    this.url = "https://automationteststore.com/";
  }

  openAutoStore() {
    cy.visit(this.url);
    return this;
  }
  clickLoginOrRegister() {
    cy.get(this.loginOrRegisterButton).click();
    return this;
  }
}
