import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../page-objects/pmtool/projects_page";

describe("Projects Page Atomic Tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    new ProjectsPage().visit();
  });

  context("Filters Table Tests", () => {
    it("Filters section is visible", () => {
      new ProjectsPage().filtersTableBody.isVisible();
    });

    it("Hide Filters section, it is not visible", () => {
      const projectsPage = new ProjectsPage();
      projectsPage.clickFiltersHeader();
      projectsPage.filtersTableBody.isNotVisible();
    });

    it("Filters Header is visible", () => {
      new ProjectsPage().filtersTableHeader.isVisible();
    });

    it("Filters Header has text", () => {
      new ProjectsPage().filtersTableHeader.containsText("Applied Filters");
    });
  });

  context("Title: Projects", () => {
    it("The title is visible and has the correct text.", () => {
      new ProjectsPage().projectName.isVisible().containsText("Projects");
      new ProjectsPage().dropdownFilterMenu.exists().isVisible().get().click();
    });
  });

  context("Table with filters", () => {
    it("The dropdown menu is visible and clickable.", () => {
      new ProjectsPage().dropdownFilterMenu.exists().isVisible().get().click();
    });

    it("The '+' button is visible and clickable.", () => {
      new ProjectsPage().buttonFilterPlus.isVisible().get().click();
    });

    it("Filters can be expanded and collapsed.", () => {
      new ProjectsPage().dropdownOpenCloseFilter.isVisible().get().click();
      new ProjectsPage().filtersTableBody.isVisible();
      new ProjectsPage().dropdownOpenCloseFilter.get().click();
      new ProjectsPage().filtersTableBody.isNotVisible();
    });

    context("Table controls", () => {
      it("The 'Add Project' button is visible and has the correct text.", () => {
        new ProjectsPage().addProjectButton
          .isVisible()
          .containsText("Add Project");
      });

      it("The 'With Selected' dropdown menu is visible.", () => {
        new ProjectsPage().dropdownTableMenuWithSelected
          .isVisible()
          .containsText("With Selected");
      });

      it("The 'Import' button is visible.", () => {
        new ProjectsPage().uploadTableButton.isVisible();
      });

      it("The 'Search' field is visible and has the correct placeholder.", () => {
        new ProjectsPage().inputSearchTableField
          .get()
          .should("be.visible")
          .and("have.attr", "placeholder", "Search");
      });

      it("The 'Search' button is visible.", () => {
        new ProjectsPage().buttonTableSearch.isVisible();
      });
    });

    context("Table with data", () => {
      it("The table header is visible and contains the correct column names.", () => {
        const projectsPage = new ProjectsPage();
        const columns = [
          projectsPage.colunmAction,
          projectsPage.columnName,
          projectsPage.columnID,
          projectsPage.columnPriority,
          projectsPage.columnStatus,
          projectsPage.columnStartDate,
          projectsPage.columnDateAdded,
          projectsPage.columnCreatedBy,
        ];
        const expectedHeaders = [
          "Action",
          "Name",
          "ID",
          "Priority",
          "Status",
          "Start Date",
          "Date Added",
          "Created By",
        ];

        columns.forEach((column, index) => {
          column
            .get()
            .should("be.visible")
            .and("contain.text", expectedHeaders[index]);
        });
      });
    });
  });
});
