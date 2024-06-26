import { HeaderSection } from "../pmtool/common/header_section";
import { CreateNewProjectModal } from "../pmtool/projects/create_new_project_modal";
import { customElement } from "../../helpers/custom_element";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=21");

    this.projectsTable = customElement(".table-bordered");

    //Tabulka s filtry
    this.filtersTableBody = customElement(
      'div[test_id="Filters"] .portlet-body'
    );
    this.filtersTableHeader = customElement(
      'div[test_id="Filters"] .portlet-title'
    );
    this.dropdownFilterMenu = customElement(
      'button[test-id="filters_dropdown_menu"]'
    );
    this.buttonFilterPlus = customElement("i.fa.fa-plus");
    //this.tableFilterName = createCustomElement
    this.dropdownOpenCloseFilter = customElement(
      'a[test_id="expand_collapse_filters"]'
    );

    //Nadpis: Projects
    this.projectName = customElement("h3.page-title");

    //Ovládací prvky tabulky
    this.addProjectButton = customElement("button[test_id='Add Project']");
    this.dropdownTableMenuWithSelected = customElement(
      'button[test_id="with_selected_dropdown"]'
    );
    this.uploadTableButton = customElement('a[test_id="import_button"]');
    this.inputSearchTableField = customElement('input[test_id="search_input"]');
    this.buttonTableSearch = customElement('button[test_id="search_button"]');

    //Tabulka s daty
    this.colunmAction = customElement(
      'th[class="fieldtype_action-th field-152-th listing_order"] div'
    );
    this.columnName = customElement('th[test_id="Name"]');
    this.columnID = customElement('th[test_id="ID"]');
    this.columnPriority = customElement('th[test_id="Priority"]');
    this.columnStatus = customElement('th[test_id="Status"]');
    this.columnStartDate = customElement('th[test_id="Start Date"]');
    this.columnDateAdded = customElement('th[test_id="Date Added"]');
    this.columnCreatedBy = customElement('th[test_id="Created By"]');
  }

  clickAddProject() {
    this.projectsTable.isVisible();
    this.addProjectButton.get().click();
    return new CreateNewProjectModal();
  }

  clickFiltersHeader() {
    this.filtersTableHeader.get().click();
    return this;
  }
}
