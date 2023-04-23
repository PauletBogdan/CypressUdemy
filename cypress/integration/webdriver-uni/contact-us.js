/// <reference types="Cypress" />

describe("Test Contact Us form via WebDriverUni", () =>{

    it("Should be able to submit a successful submission via contact us form",()=> {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.get('#contact-us').click({force: true});
        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("Doe");
        cy.get('[name="email"]').type("joedoe@testemail.com");
        cy.get('textarea.feedback-input').type('Test Comment');
        cy.get('[type="submit"]').click();
    });
    
    it.only("Should not be able to submit a successful submission via contact us form as all fields are required",()=> {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("Doe");
        cy.get('textarea.feedback-input').type('Test Comment');
        cy.get('[type="submit"]').click();
    });
})
