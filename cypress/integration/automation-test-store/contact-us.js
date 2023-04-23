/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () =>{

    it("Should be able to submit a successful submission via contact us form",()=> {
        //cypress code
        cy.visit("https://www.automationteststore.com/");
        // cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get("a[href$='contact']").click();
        // cy.xpath("//a[contains(@href,'contact')]").click();
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
        cy.get('#ContactUsFrm_enquiry').type("Do you prove additional discount on bulk orders?");
        cy.get('button[title="Submit"]').click();
    });
    
})
