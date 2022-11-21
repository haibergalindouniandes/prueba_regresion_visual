import { Utils } from '../../support/utils';
class Pages {

    instance = 0;

    setInstance(instance) {
        this.instance = instance;
    }

    open() {
        Utils.navigate('#/pages');        
    }

    listPages() {
        return cy.get('li.gh-list-row.gh-posts-list-item.gh-posts-list-item-labs.gh-post-list-plain-status');
    }

    submitLinkPages() {
        return cy.get('a[href="#/pages/"]');
    }

    firstPost() {
        return cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-title').first();
    }

    buttonSettingsPage() {
        return cy.get('button[title="Settings"]');
    }

    buttonDeletePage() {
        return cy.get('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button');
    }

    confirmButtonDeletePage() {
        return cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    }

    getListPages(emailLogin, escenario) {
        this.submitLinkPages().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        return this.submitLinkPages();
    }

    buttonNewPage() {
        return cy.get('a[href="#/editor/page/"]'); 
    }   
    
    titlePage() {
        return cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]'); 
    }

    buttonPublish() {
        //cy.get('a[href="#/pages/"').click({ force: true });
        Utils.delay();
        return cy.get('div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]');  
    }

    buttonFinalReview() {
        return null;  
    }
 
    buttonPublishNow() {
        return cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]');  
    }

    buttonEdit() {
        return cy.get('a[class="ember-view permalink gh-list-data gh-post-list-featured"]').first();  
    }

    buttonUpdate() {
        cy.get('div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]').click({ force: true });;  
        Utils.delay();
        return this.buttonPublishNow();  
    }

    inputToSearch(){
        return cy.get('.ember-basic-dropdown > .ember-view');
    }



    buttonSearch(emailLogin, escenario){
        cy.get('button[class="gh-nav-btn-search"]').click({ force: true });
        cy.get('input[class="gh-input-with-select-input"]').clear().type("Palabra a buscar");        
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
    }

    deleteFirstPage(emailLogin, escenario) {        
        this.submitLinkPages().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.firstPost().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.buttonSettingsPage().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.buttonDeletePage().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        
        this.confirmButtonDeletePage().click({ force: true });
        Utils.delay(2000);
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
    }

    createPage(emailLogin, escenario) {
        this.submitLinkPages().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        
        this.buttonNewPage().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        
        this.titlePage().clear().type("holaMundo");        
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        
        this.buttonPublish().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        
        this.buttonFinalReview();
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        
        this.buttonPublishNow().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
    
        this.submitLinkPages().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

    }

    modifyPage(emailLogin, escenario) {
        this.submitLinkPages().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        
        this.buttonEdit().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        
        this.titlePage().clear().type("holaMundo Modificado");        
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        
        this.buttonUpdate().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        
        this.submitLinkPages().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());  
    }

}
export default Pages;