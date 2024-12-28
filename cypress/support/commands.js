// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("fill_username",(username)=>{
    cy.get('[name="user_login"]').type(username).blur();
})
Cypress.Commands.add("fill_email",(useremail)=>{
    cy.get('[name="user_email"]').type(useremail).blur();

})
Cypress.Commands.add("Validate_Username_exist",()=>{
    return cy.get('.arm-df__fc--validation__wrap').should('to.visible').invoke('text').then((text) => text.trim());
})
Cypress.Commands.add("fill_firstname",(first_name)=>{
    cy.get('[name="first_name"]').type(first_name).blur();
})
Cypress.Commands.add("fill_lastname",(last_name)=>{
    cy.get('[name="last_name"]').type(last_name).blur();
})
Cypress.Commands.add("fill_password",(pasw)=>{
    cy.get('[name="user_pass"]').type(pasw).blur();
})
Cypress.Commands.add("formsubmit",()=>{
    // armFormSubmitBtn
    cy.get('[name="armFormSubmitBtn"]').click()

})
Cypress.Commands.add("basic_signup_fix_redirection_specific_page",()=>{
    cy.window().then((win) => {
        
          const { URL,admin_username, admin_pass} = require("./constant");
          cy.visit(URL+'wp-login.php')
          cy.get("#user_login").type(admin_username)
          cy.get('#user_pass').type(admin_pass)
          cy.get('#wp-submit').click()
          cy.wait(2000)
          cy.visit(URL+'wp-admin/admin.php?page=arm_general_settings&action=redirection_options');
          cy.get('input[name="arm_redirection_settings[signup][redirect_type]"][value="common"]').click();
          cy.get('input[name="arm_redirection_settings[login][type]"][value="page"]').should('be.visible').click(); 
          cy.get('#arm_redirection_settings_btn').click()  // Execute the provided action function
          cy.wait(1000); // Add a short wait         
      });     
})
Cypress.Commands.add("basic_signup_fix_redirection_specific_url",()=>{
    cy.window().then((win) => {
        
          const { URL,admin_username, admin_pass,basic_signup_fix_redirection_specific_url} = require("./constant");
          cy.visit(URL+'wp-login.php')
          cy.get("#user_login").type(admin_username)
          cy.get('#user_pass').type(admin_pass)
          cy.get('#wp-submit').click()
          cy.wait(2000)
          cy.visit(URL+'wp-admin/admin.php?page=arm_general_settings&action=redirection_options');
          cy.get('input[name="arm_redirection_settings[signup][redirect_type]"][value="common"]').click();
          cy.get('input[name="arm_redirection_settings[signup][type]"][value="url"]').should('be.visible').click(); 
          cy.get('input[name="arm_redirection_settings[signup][url]"]').clear().type(basic_signup_fix_redirection_specific_url); 
          cy.get('#arm_redirection_settings_btn').click()  // Execute the provided action function
          cy.wait(1000); // Add a short wait         
      });     
})



Cypress.Commands.add('generateRandomUser', () => {
    const randomFirstName = generateRandomName();
    const randomLastName = generateRandomName();
    const randomEmail = generateRandomEmail(randomFirstName, randomLastName);
    const randomUsername = generateRandomUsername(randomFirstName, randomLastName);
  
    return { firstName: randomFirstName, lastName: randomLastName, email: randomEmail, username: randomUsername };
  });
  
  function generateRandomName() {
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    let name = '';
    const nameLength = Math.floor(Math.random() * 6) + 4; // Name length between 4 and 9 characters
  
    for (let i = 0; i < nameLength; i++) {
      if (i % 2 === 0) {
        name += consonants[Math.floor(Math.random() * consonants.length)];
      } else {
        name += vowels[Math.floor(Math.random() * vowels.length)];
      }
    }
  
    return name[0].toUpperCase() + name.slice(1);
  }
  
  function generateRandomEmail(firstName, lastName) {
    const domainSuffixes = ['gmail.com', 'yahoo.com', 'hotmail.com', 'example.com'];
    const randomDomain = domainSuffixes[Math.floor(Math.random() * domainSuffixes.length)];
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${randomDomain}`;
  }
  
  function generateRandomUsername(firstName, lastName) {
    const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}${Math.floor(Math.random() * 1000)}`; // Add a random number for uniqueness
    return username;
  }
  
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })