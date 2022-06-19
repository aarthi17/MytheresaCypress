class LoginPage{
    

    getLoginPage()
    {
        return cy.get('#myaccount')
    }

    getEmail()
    {
        return cy.get('#qa-login-email > #email')
    }
    
    getPassword()
    {
        return cy.get('#qa-login-password > #pass')
    }

    getLoginButton()
    {
        return cy.get('#qa-login-button > #send2')
    }
        
    }
    
    export default LoginPage;