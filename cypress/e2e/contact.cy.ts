import contactUsPage from '../pageobjects/contactUsPage'
import headerBar from '../pageobjects/headerBar'

describe('Login functionality', () => {

    beforeEach(() => {
        cy.visitHome();
    })

    it('Test Case 6: Fill in Contact Form', () => {
        let contactUsP = new contactUsPage();
        let headerB = new headerBar();
        headerB.clickMenuItem("Contact us");
        contactUsP.fillContactForm("name", "email@email", "subject", "message");
        contactUsP.uploadFile("README.md");
        contactUsP.clickSubmit();
        contactUsP.checkSuccessMsg("Success! Your details have been submitted successfully.");
        contactUsP.clickHome();
        cy.url().should('include', Cypress.config('baseUrl'))

    });
});