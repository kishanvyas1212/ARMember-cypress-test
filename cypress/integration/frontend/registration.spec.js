
const { URL,username_exist_msg, useremail_exist_msg,basic_signup_fix_redirection_specific_page_url,basic_signup_fix_redirection_specific_url } = require("../../support/constant");

import '../../support/commands';

describe("Regsitration form cases",()=>{
    // it("Validate Username",()=>{
    //     // it should give warning when enter the already used username
    //     cy.visit(URL+'register')
    //     cy.fill_username("jaydeep")
    //     cy.Validate_Username_exist().then((text) => {
    //         expect(text).to.equal(username_exist_msg);
    //       });
    // })
    // it("Validate email",()=>{
    //     // it should give warning when enter the already used username
    //     cy.visit(URL+'register')
    //     cy.fill_email("jaydeepdchaudhary@gmail.com")
    //     cy.Validate_Username_exist().then((text) => {
    //         expect(text).to.equal(useremail_exist_msg);
    //       });
    // })
    // Fixed Redirection
    // it("after registration should redirect to specific page",()=>{
        
    //     // cy.basic_signup_fix_redirection_specific_page()
    //     cy.clearAllCookies()
    //     cy.clearAllLocalStorage()
    //     cy.clearAllSessionStorage()
        
    //     cy.wait(2000); 
    //     cy.wait(2000); 
    //     cy.visit(URL+'register')
    //     cy.generateRandomUser().then((user) => {
            
    //         cy.fill_username(user.username);
    //         cy.fill_email(user.email);
    //         cy.fill_firstname(user.firstName);
    //         cy.fill_lastname(user.lastName);
    //         cy.fill_password(user.username)
    //         cy.formsubmit()
    //       });
    //     cy.url().should('eq',basic_signup_fix_redirection_specific_page_url)
    // })
    it("after registration should redirect to specific url",()=>{
                
        cy.basic_signup_fix_redirection_specific_url()
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        
        cy.wait(2000); 

        cy.visit(URL+'register')
        cy.generateRandomUser().then((user) => {
            
            cy.fill_username(user.username);
            cy.fill_email(user.email);
            cy.fill_firstname(user.firstName);
            cy.fill_lastname(user.lastName);
            cy.fill_password(user.username)
            cy.formsubmit()
          });
        cy.url().should('eq',basic_signup_fix_redirection_specific_url)
    })
})