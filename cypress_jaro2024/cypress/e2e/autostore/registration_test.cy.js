import { faker } from "@faker-js/faker";

import { RegistrationPage } from "../../page-objects/autostore/register_page";

describe("User Registration", () => {
  it("Vyplnění formuláře Automation Test Store", () => {
    const userData = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      fax: faker.phone.number(),
      company: faker.company.name(),
      address1: faker.address.streetAddress(),
      address2: faker.address.secondaryAddress(),

      city: faker.address.city(),
      country: "Czech Republic",
      region: "Vysocina",
      postCode: faker.address.zipCode(),
      loginName: faker.internet.userName(),
      password: faker.internet.password(),
    };

    new RegistrationPage()
      .openAutoStore()
      .clickLoginOrRegister()
      .clickContinue()
      .fillForm(userData)
      .submitForm()
      .verifySuccessMessage();
  });
});
