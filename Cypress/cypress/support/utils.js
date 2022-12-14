const delay = Cypress.env('delay') || 1000;

const siteUrl = Cypress.config('baseUrl') || "http://localhost:3002/ghost/";
const url = Cypress.env('url') || "http://localhost:3002/ghost/#/signin";
const dashboardPage = Cypress.env('dashboardPage') || "http://localhost:3002/ghost/#/site";
const staffPage = Cypress.env('staffPage') || "http://localhost:3002/ghost/#/staff";
const memberPage = Cypress.env("memberPage") || "http://localhost:3002/ghost/#/members";
const emailLogin = Cypress.env('emailLogin') || "miso@miso.com";
const passwordLogin = Cypress.env('passwordLogin') || "Miso123456";
const newPassword = Cypress.env('newPassword') || "Miso123456";

let counter = 0;
export class Utils {
    //Function that generates the attempts randomly
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    //Function that generates the timestamp
    static getCurrentTimestamp() {
        return Math.floor(Date.now() / 1000);
    };

    //Function that delay a seconds
    static delay(delaySeconds) {
        if (delaySeconds != undefined) {
            cy.wait(delaySeconds)
        } else {
            cy.wait(delay)
        }
    };

    //Function that takes a screenshot
    static takeScreenshot(emailLogin, escenario, paso) {
        this.delay();
        //cy.screenshot(`${emailLogin}/${escenario}/${paso}`);
        cy.screenshot(`${paso}`);
        this.delay();
    };

    //Function to get a url
    static navigate(path) {
        cy.visit(`${siteUrl}${path}`)
    }

    //Function that reset step 
    static pruebaID_reset() {
        counter = 0 ;       
        
    };
    //Function that assigns step 
    static pruebaID() {
        counter = counter+1 ;
        return counter;
        
    };

    //Function to get url
    static getUrl() {
        return url;        
    };

    //Function to get email
    static getEmail() {
        return emailLogin;        
    };

    //Function to get password
    static getPassword() {
        return passwordLogin;        
    };

    //Function to get dashboardPage
    static getDashboardPage() {
        return dashboardPage;        
    };

    //Function to get staffPage
    static getStaffPage() {
        return staffPage;        
    };

    //Function to get newPassword
    static getNewPassword() {
        return newPassword;        
    };

    //Function to get memberPage
    static getMemberPage() {
        return memberPage;        
    };

}