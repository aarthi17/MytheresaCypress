/// <reference types="cypress" />
import { Utility } from "../../support/utility"

let windowErrorSpy;
const url = new Utility().getBaseUrl();

Cypress.on('window:before:load', (win) => {
  windowErrorSpy = cy.spy(win.console, 'error'); 
});
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('Validate Javascript error on navigating to page', function (){
         
    before(function () {
        cy.visit(url,{
            headers:{
                "Accept":"application/json,text/plain.*/*",
                "User-Agent":"axios/0.18.0"
            }
            
        });
      })
    
      it('Validate no Javascript error is caught on visiting website', () => {
        cy.wait(1000).then(() => {
          expect(windowErrorSpy).to.not.be.called; 
        });
      })
  
   

})