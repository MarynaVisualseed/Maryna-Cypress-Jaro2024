import { ProductPage } from "../../page-objects/eshop/product_page";

describe("Polymorphism Tredgate Eshop", () => {
  beforeEach(() => {
    new ProductPage().openEshop();
  });

  it("open Tredgate Eshop, open product iPhone, verify description, and click on logo", () => {
    new ProductPage()
      .clickProduct()
      .verifyProductDescription()
      .clickLogo()
      .verifyUrl();
  });
});
