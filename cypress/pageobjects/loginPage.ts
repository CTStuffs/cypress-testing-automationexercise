class loginPage {
    elements = {
        newUserHeader: () => cy.get("div[class='signup-form'] h2"),
        loginHeader: () => cy.get("div[class='login-form'] h2"),
        loginEmail: () => cy.getByDataQa("login-email"),
        loginPassword: () => cy.getByDataQa("login-password"),
        loginBtn: () => cy.getByDataQa("login-button"),
        signupName: () => cy.getByDataQa("signup-name"),
        signupEmail: () => cy.getByDataQa("signup-email"),
        signupBtn: () => cy.getByDataQa("signup-button"),
        errorMsgLogin: () => cy.get('.login-form > form> p'),
        errorMsgSignup: () => cy.get('.signup-form > form> p')

    }

    checkErrorMsgLogin(message: string) {
        this.elements.errorMsgLogin().contains(message)
    }

    checkErrorMsgSignup(message: string) {
        this.elements.errorMsgSignup().contains(message)
    }

    checkNewUserHeader(text: string) {
        this.elements.newUserHeader().contains(text);
    }

    enterSignupName(username: string) {
        this.elements.signupName().clearThenType(username);
    }

    enterSignupEmail(email: string) {
        this.elements.signupEmail().clearThenType(email);
    }

    clickSignupButton() {
        this.elements.signupBtn().click();
    }

    enterLoginEmail(email: string) {
        this.elements.loginEmail().clearThenType(email);
    }

    enterLoginPassword(password: string) {
        this.elements.loginPassword().clearThenType(password);
    }

    clickLoginButton() {
        this.elements.loginBtn().click();
    }



}

export default loginPage;