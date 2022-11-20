import { Utils } from '../../support/utils';
import Pages from './pages';
class Posts {

    instance = 0;    

    setInstance(instance) {
        this.instance = instance;
    }
  
    submitLinkPosts() {
        return cy.get('a[href="#/posts/"]').first(); 
    }

    buttonNewPost(){
        return cy.get('a[class="ember-view gh-btn gh-btn-green"]');
    }

    inputNewPostTitle(){
        return cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]');
    }

    inputNewPostContent(){
        return cy.get('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]');
    }    

    buttonReviewPost(){
        return null;
    }

    buttonPublishPost() {
        return cy.get('div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]');  
    }

    buttonFinalReview(){
        return null;
    }

    buttonPublishPostNow(){
        return cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]');
    }

    showNewPost(){
        return cy.get('a[class="gh-post-bookmark-wrapper"]');
    }

    showPostSettingExcerpt(){
        return cy.get('#custom-excerpt');
    }

    showPostSettingCheckbox(){
        return cy.get('.checkbox > p');
    }
    
    firstPost() {
        return cy.get('a[class="ember-view permalink gh-list-data gh-post-list-button"').first();
    }

    buttonEditPost() {
        return cy.get('a[class="ember-view gh-post-list-cta edit"]');
    }

    buttonSettingsPost() {
        return cy.get('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]');
    }

    buttonDeletePost() {
        return cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]');
    }

    confirmButtonDeletePost() {
        return cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    }

    getListPosts(emailLogin, escenario) {
        this.submitLinkPosts().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        return this.submitLinkPosts();
    }
    
    deleteFirstPost(emailLogin, escenario) {                    
        this.submitLinkPosts().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.firstPost().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());       
       
        this.buttonEditPost().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
     
        this.buttonSettingsPost().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.buttonDeletePost().click({ force: true });
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        Utils.delay();

        this.confirmButtonDeletePost().click({ force: true });
        Utils.delay(2000);
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());       


    }

    createPost(postTitle,postContent, emailLogin, escenario) {
        this.submitLinkPosts().click({ force: true});
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.buttonNewPost().click({force: true});
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.inputNewPostTitle().clear().type(postTitle);
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.inputNewPostContent().clear().type(postContent);
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.buttonReviewPost();
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.buttonPublishPost().click({force: true});
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.buttonFinalReview();
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
    
        this.buttonPublishPostNow().click({force: true});
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.submitLinkPosts().click({ force: true});
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());        
    }

    updatePost(postContent, emailLogin, escenario) {                
        this.submitLinkPosts().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.firstPost().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());        

        this.buttonEditPost().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
     
        this.buttonSettingsPost().click({ force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.showPostSettingExcerpt().clear().type(postContent);
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
    
        this.showPostSettingCheckbox().click();
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
    }

    publishPost(postTitle,postContent, emailLogin, escenario) {
        this.submitLinkPosts().click({ force: true});
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.buttonNewPost().click({force: true});
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.inputNewPostTitle().clear().type(postTitle);
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.inputNewPostContent().clear().type(postContent);
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.buttonReviewPost().click({force: true});
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.buttonPublishPost().click({force: true});
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());

        this.buttonFinalReview().click({force: true});
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
    
        this.buttonPublishPostNow().click({force: true});
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
    
        this.submitLinkPosts().click({ force: true});
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());        
    }

}
export default Posts;