export default class PIMPage {

    private by_pim = "xpath=//li[@id='pim']";
    private by_addEmp = "xpath=//*[@id='pim']/ul/li[2]/a";

    private by_iframe = "#rightMenu";
    private by_addEmpText = "xpath=//h2[text()='PIM : Add Employee']";

    private by_firstName = "xpath=//input[@id='txtEmpFirstName']";
    private by_lastName = "xpath=//input[@id='txtEmpLastName']";

    private by_save = "xpath=//input[@id='btnEdit']";
    private by_edit = "xpath=//input[@id='btnEditPers']";

    private by_chkSmoker = "xpath=//input[@id='chkSmokeFlag']";

    private by_saveframe = "xpath=//input[@id='btnEditPers']";
    private by_back = "xpath=//input[@class='backbutton']";

    private by_searchByDropdown = "xpath=//select[@id='loc_code']";
    private by_searchFor = "xpath=//input[@id='loc_name']";
    private by_searchButton = "xpath=//*[@id='standardView']/div[2]/input[2]";

    private by_employeeName ="text=Hanu DSU";


    getPim(): string {
        return this.by_pim;
    }

    getaddEmp(): string {
        return this.by_addEmp;
    }

    getIframe(): string {
        return this.by_iframe;
    }

    getaddEmpText(): string {
        return this.by_addEmpText;
    }

    getFirstname(): string {
        return this.by_firstName;
    }

    getLastname(): string {
        return this.by_lastName;
    }

    getSave(): string {
        return this.by_save;
    }

    getEdit(): string {
        return this.by_edit;
    }

    getChkSmoker(): string {
        return this.by_chkSmoker;
    }

    getFrameSave(): string {
        return this.by_saveframe;
    }

    getBack(): string {
        return this.by_back;
    }

    getsearchByDropdown(): string {
        return this.by_searchByDropdown;
    }

    getSearchFor(): string {
        return this.by_searchFor;
    }

    getSearchButtton(): string {
        return this.by_searchButton;
    }

    getEmployeeName(): string {
        return this.by_employeeName;
    }
}