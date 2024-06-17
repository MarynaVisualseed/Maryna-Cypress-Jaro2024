import { HeaderSection } from "./header_section";

export class ProductPage extends HeaderSection {
  constructor() {
    super();
    this.mainUrl = "https://tredgate.com/eshop/";
    this.productIphone = 'img[title="iPhone"]';
    this.productDescription = ".intro";
    this.expectedDescription =
      "iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name or number in your address book, a favorites list, or a call log. It also automatically syncs all your contacts from a PC, Mac, or Internet service. And it lets you select and listen to voicemail messages in whatever order you want just like email.";
  }

  openEshop() {
    cy.visit(this.mainUrl);
    return this;
  }

  clickProduct() {
    cy.get(this.productIphone).click();
    return this;
  }

  verifyProductDescription() {
    cy.get(this.productDescription).should(
      "contain.text",
      this.expectedDescription
    );
    return this;
  }

  verifyUrl() {
    cy.url().should("include", this.mainUrl);
    return this;
  }
}
