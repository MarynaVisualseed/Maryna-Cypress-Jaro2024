export class HeaderSection {
  constructor() {
    this.logoAnchor = 'img[title="Tredgate Obchod"]';
  }

  clickLogo() {
    cy.get(this.logoAnchor).click();
    return this;
  }
}
