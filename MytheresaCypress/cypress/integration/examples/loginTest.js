import LoginPage from "../../support/pageObject/LoginPage";
import CustomerPage from "../../support/pageObject/CustomerPage";
import { Utility } from "../../support/utility"
/// <reference types="cypress" />




Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Validate login feature', function (){
    
    let data;
    const url = new Utility().getBaseUrl();
    
    beforeEach(function () {
        cy.fixture('input').then(function (fdata) {
        data = fdata;     
        })
    })    

    before(function () {
        cy.visit(url,{
            headers:{
                "Accept":"application/json,text/plain.*/*",
                "User-Agent":"axios/0.18.0"
            }
        });
      })
      
      
  const loginPage = new LoginPage();
  const customerPage = new CustomerPage();
  
    it('Validate Login feature using valid credential', () => {

         loginPage.getLoginPage().click();
         loginPage.getEmail().type(data.email);                    //type email address
         loginPage.getPassword().type(data.password);              //type password
         loginPage.getLoginButton().click();                       //click on login
         customerPage.getWelcomeMsg().contains(data.welcomeMsg);   //verify if welcome message is displayed

    })


})