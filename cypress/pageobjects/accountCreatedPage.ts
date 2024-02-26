class accountCreatedPage {

    elements = {
        accountCreatedMsg: () => cy.getByDataQa("account-created").get("b"),
        accountDeletedMsg: () => cy.getByDataQa("account-deleted"),
        continueBtn: () => cy.getByDataQa("continue-button")
    }

    checkAccountCreatedMsg(text: string) {
        this.elements.accountCreatedMsg().contains(text);
    }


    checkAccountDeletedMsg(text: string) {
        this.elements.accountDeletedMsg().contains(text);
    }
    clickContinueBtn() {
        this.elements.continueBtn().click();
    }


}
export default accountCreatedPage;