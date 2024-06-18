import { MainPage } from "./main_page";

export class RegistrationPage extends MainPage {
  constructor() {
    super();
    this.buttonContinue = "button.btn.btn-orange.pull-right:first";
    this.firstNameInput = "#AccountFrm_firstname";
    this.lastNameInput = "#AccountFrm_lastname";
    this.emailInput = "#AccountFrm_email";
    this.phoneInput = "#AccountFrm_telephone";
    this.faxInput = "#AccountFrm_fax";
    this.companyInput = "#AccountFrm_company";
    this.addressOneInput = "#AccountFrm_address_1";
    this.addressTwoInput = "#AccountFrm_address_2";
    this.cityInput = "#AccountFrm_city";
    this.regionSelect = "#AccountFrm_zone_id";
    this.zipCodeInput = "#AccountFrm_postcode";
    this.countrySelect = "#AccountFrm_country_id";
    this.loginNameInput = "#AccountFrm_loginname";
    this.passwordInput = "#AccountFrm_password";
    this.confirmPasswordInput = "#AccountFrm_confirm";
    this.subscribeNoRadio = "#AccountFrm_newsletter0";
    this.termsCheckbox = "#AccountFrm_agree";
    this.submitButton = 'button[title="Continue"]';
    this.successfulMessage = ".maintext";
  }

  clickContinue() {
    cy.get(this.buttonContinue).click();
    return this;
  }

  fillForm(data) {
    cy.get(this.firstNameInput).type(data.firstName);
    cy.get(this.lastNameInput).type(data.lastName);
    cy.get(this.emailInput).type(data.email);
    cy.get(this.phoneInput).type(data.phone);
    cy.get(this.faxInput).type(data.fax);

    cy.get(this.companyInput).type(data.company);
    cy.get(this.addressOneInput).type(data.address1);
    cy.get(this.addressTwoInput).type(data.address2);
    cy.get(this.cityInput).type(data.city);
    cy.get(this.countrySelect).select(data.country);
    cy.wait(1000);
    cy.get(this.regionSelect).select(data.region);
    cy.get(this.zipCodeInput).type(data.postCode);
    cy.get(this.countrySelect).type(data.country);

    cy.get(this.loginNameInput).type(data.loginName);
    cy.get(this.passwordInput).type(data.password);
    cy.get(this.confirmPasswordInput).type(data.password);
    cy.get(this.subscribeNoRadio).check();
    cy.get(this.termsCheckbox).check();
    return this;
  }

  submitForm() {
    cy.get(this.submitButton).click();
    return this;
  }

  verifySuccessMessage() {
    cy.get(this.successfulMessage).should(
      "contain.text",
      "Your Account Has Been Created!"
    );
    return this;
  }
}
// YOUR ACCOUNT HAS BEEN CREATED!
