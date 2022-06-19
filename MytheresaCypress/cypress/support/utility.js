/// <reference types="cypress" />
export class Utility {
    
    getBaseUrl() {
        let env = Cypress.env('ENV'); //Get the ENV value
        if (env == 'production') 
            return "https://www.mytheresa.com/en-de/men.html"; 
        else if (env == 'staging')
            return "https://staging.mytheresa.com/en-de/men.html";
        else if (env == 'test')
            return "https://test.mytheresa.com/en-de/men.html";
        else if (env == 'local')
            return "https://local.mytheresa.com/en-de/men.html";
    }
}