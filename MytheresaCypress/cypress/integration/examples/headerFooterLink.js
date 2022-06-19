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
    
    it('Validate 200 status code for links in header section', () => {

        cy.validateBrokenLink(mainPage.getDepartment());    //verify 200 status code other department links
        cy.validateBrokenLink(mainPage.getMetaList());      //verify 200 status code other meta links

    })

    it('Validate 200 status code for links in footer section', () => {

        cy.validateBrokenLink(mainPage.getFooter());           //Verify 200 status code for footer containing service, about /cutomercare
        cy.validateBrokenLink(mainPage.getPaymentFooter());    //Verify 200 status code for footer containing payment info
        cy.validateBrokenLink(mainPage.getDeliveryFooter());   //Verify 200 status code for footer containing delivery info
        cy.validateBrokenLink(mainPage.getImprintFooter());    //Verify 200 status code for footer containing imprint info

    })

    it('Validate 200 status code for links in main section', () => {

        cy.validateBrokenLink(mainPage.getMainCol());      //Verify 200 status code for links in main content section

    })


})