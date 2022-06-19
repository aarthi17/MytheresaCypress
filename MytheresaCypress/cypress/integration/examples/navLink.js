import MainPage from "../../support/pageObject/MainPage";
/// <reference types="cypress" />
import "../../support/commands";
import { Utility } from "../../support/utility"

const url = new Utility().getBaseUrl();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Validate broken links', function (){
    
    before(function () {
        cy.visit(url,{
            headers:{
                "Accept":"application/json,text/plain.*/*",
                "User-Agent":"axios/0.18.0"
            }
        });
      })
    
    const mainPage = new MainPage();

    it('Validate 200 status code for links in New Arrivals header', () => {
        cy.validateBrokenLink(mainPage.getNewArrival());    
    })
    
    it('Validate 200 status code for links in Clothing header', () => {
        cy.validateBrokenLink(mainPage.getClothing());
    })

    it('Validate 200 status code for links in Shoes header', () => {
        cy.validateBrokenLink(mainPage.getShoes());
    })

    it('Validate 200 status code for links in Bags header', () => {
        cy.validateBrokenLink('.nav-primary > :nth-child(14)');
    })

    it('Validate 200 status code for links in Accessories header', () => {
        cy.validateBrokenLink(mainPage.getAccessories());
    })

    it('Validate 200 status code for links in New season header', () => {
        cy.validateBrokenLink(mainPage.getNewSeason());
    })

    it('Validate 200 status code for links in vacation shop header', () => {
        cy.validateBrokenLink(mainPage.getVacation());
    })
    
    it('Validate 200 status code for links in sale header', () => {
        cy.validateBrokenLink(mainPage.getSale());
    })
    

})