import signInData from "../data/signin.json";
import loginPage from '../pageobjects/loginPage'
import registerPage from '../pageobjects/registerPage'
import headerBar from '../pageobjects/headerBar'
import accountCreatedPage from '../pageobjects/accountCreatedPage'


describe('Login functionality', () => {

    beforeEach(() => {
        cy.visitHome();
    })



    it.skip('Test Case 1: Register User', () => {

        let userName = signInData.firstName + " " + signInData.lastName;
        let loginP = new loginPage();
        let registerP = new registerPage();
        let headerB = new headerBar();
        let accountCreateP = new accountCreatedPage();
        headerB.clickMenuItem("Signup / Login");
        loginP.checkNewUserHeader("New User Signup!");
        loginP.enterSignupName(userName);
        loginP.enterSignupEmail(signInData.email);
        loginP.clickSignupButton();

        registerP.clickGender(); // title
        registerP.checkPrevInputtedVals(userName, signInData.email);
        registerP.enterPasswordField(signInData.password);
        registerP.dateSelect(signInData.dob.day, signInData.dob.month, signInData.dob.year)

        registerP.clickNewsletterCheck();
        registerP.clickOptinCheck();

        registerP.enterAddressFields(signInData.firstName, signInData.lastName, signInData.address.addressFull, signInData.address.country, signInData.address.state, signInData.address.city, signInData.address.zipcode, signInData.address.mobile);
        registerP.clickCreateAccount();


        accountCreateP.checkAccountCreatedMsg("Account Created");

        //cy.getByDataQa("continue-button").click();
        accountCreateP.clickContinueBtn();
        cy.get(".nav > :nth-child(10)").contains(`Logged in as ${signInData.firstName} ${signInData.lastName}`);
        headerB.clickMenuItem("Delete Account");
        accountCreateP.checkAccountDeletedMsg("Account Deleted!")



    })


    it.skip('Test Case 2: Login User with correct email and password', () => {

        let userName = signInData.firstName + " " + signInData.lastName;
        let loginP = new loginPage();
        let registerP = new registerPage();
        let headerB = new headerBar();
        let accountCreateP = new accountCreatedPage();
        headerB.clickMenuItem("Signup / Login");
        loginP.checkNewUserHeader("New User Signup!");
        loginP.enterSignupName(userName);
        loginP.enterSignupEmail(signInData.email);
        loginP.clickSignupButton();

        registerP.clickGender(); // title
        registerP.checkPrevInputtedVals(userName, signInData.email);
        registerP.enterPasswordField(signInData.password);
        registerP.dateSelect(signInData.dob.day, signInData.dob.month, signInData.dob.year)

        registerP.enterAddressFields(signInData.firstName, signInData.lastName, signInData.address.addressFull, signInData.address.country, signInData.address.state, signInData.address.city, signInData.address.zipcode, signInData.address.mobile);
        registerP.clickCreateAccount();

        accountCreateP.checkAccountCreatedMsg("Account Created");

        //cy.getByDataQa("continue-button").click();
        accountCreateP.clickContinueBtn();
        headerB.clickMenuItem("Logout");
        headerB.clickMenuItem("Signup / Login");
        loginP.enterLoginEmail(signInData.email);
        loginP.enterLoginPassword(signInData.password);
        loginP.clickLoginButton();
        headerB.checkMenuItemExists(`Logged in as ${signInData.firstName} ${signInData.lastName}`);
        headerB.clickMenuItem("Delete Account");
        accountCreateP.checkAccountDeletedMsg("Account Deleted!")
    })

    it.skip('Test Case 3: Login User with incorrect email and password', () => {
        let loginP = new loginPage();
        let headerB = new headerBar();
        headerB.clickMenuItem("Signup / Login");
        loginP.enterLoginEmail(signInData.badSignIn.bademail);
        loginP.enterLoginPassword(signInData.badSignIn.badpassword);
        loginP.clickLoginButton();
        loginP.checkErrorMsgLogin('Your email or password is incorrect!')
    });


    it.skip('Test Case 4: Login User with correct email and password', () => {


        let userName = signInData.firstName + " " + signInData.lastName;
        let loginP = new loginPage();
        let registerP = new registerPage();
        let headerB = new headerBar();
        let accountCreateP = new accountCreatedPage();
        headerB.clickMenuItem("Signup / Login");
        loginP.checkNewUserHeader("New User Signup!");
        loginP.enterSignupName(userName);
        loginP.enterSignupEmail(signInData.email);
        loginP.clickSignupButton();

        registerP.clickGender(); // title
        registerP.checkPrevInputtedVals(userName, signInData.email);
        registerP.enterPasswordField(signInData.password);
        registerP.dateSelect(signInData.dob.day, signInData.dob.month, signInData.dob.year)

        registerP.enterAddressFields(signInData.firstName, signInData.lastName, signInData.address.addressFull, signInData.address.country, signInData.address.state, signInData.address.city, signInData.address.zipcode, signInData.address.mobile);
        registerP.clickCreateAccount();

        accountCreateP.checkAccountCreatedMsg("Account Created");

        accountCreateP.clickContinueBtn();
        headerB.checkMenuItemExists(`Logged in as ${signInData.firstName} ${signInData.lastName}`);
        headerB.clickMenuItem("Logout");
        cy.url().should('contain', '/login');




    })
    it('Test Case 5:: Register User with existing email', () => {
        let loginP = new loginPage();
        let headerB = new headerBar();
        headerB.clickMenuItem("Signup / Login");
        loginP.checkNewUserHeader("New User Signup!");
        loginP.enterSignupName(signInData.existingSignIn.name);
        loginP.enterSignupEmail(signInData.existingSignIn.email);
        loginP.clickSignupButton();
        loginP.checkErrorMsgSignup('Email Address already exist!')

    });
})