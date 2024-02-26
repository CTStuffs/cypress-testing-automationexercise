class contactUsPage {
    elements = {
        formHeaderTitle: () => cy.get("div[class='contact-form'] h2[class='title text-center']"),
        nameField: () => cy.getByDataQa("name"),
        emailField: () => cy.getByDataQa("email"),
        subjectField: () => cy.getByDataQa("subject"),
        messageField: () => cy.getByDataQa("message"),
        uploadBtn: () => cy.get("input[name='upload_file']"),
        submitBtn: () => cy.get("[data-qa='submit-button']"),
        successMsg: () => cy.get(".status.alert.alert-success"),
        homeBtn: () => cy.get(".btn.btn-success"),
    }

    fillContactForm(name: string, email: string, subject: string, message: string) {
        this.elements.nameField().type(name);
        this.elements.emailField().type(email);
        this.elements.messageField().type(message);
        this.elements.subjectField().type(subject);
    }

    uploadFile(filename: string) {
        this.elements.uploadBtn().click();
        this.elements.uploadBtn().selectFile(filename);

    }

    clickSubmit() {
        this.elements.submitBtn().click();
    }

    checkSuccessMsg(msg: string) {
        this.elements.successMsg().contains(msg);
    }

    clickHome() {
        this.elements.homeBtn().click();
    }





}

export default contactUsPage;