describe('Login page testing', () => {

  it('Should see all fields and submit button when open the login form', () => {
    cy.visit('https://www.saucedemo.com/')


    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="username"]').should('be.visible');
    cy.get('[data-test="password"]').should('be.visible');
    cy.get('[data-test="login-button"]').should('be.visible');
    cy.get('[data-test="login-button"]').should('be.enabled');
    /* ==== End Cypress Studio ==== */
  })

  it('Should see error when login field is not correct when submit button is clicked', () => {
    cy.visit('https://www.saucedemo.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="username"]').type('standart');
    cy.get('[data-test="password"]').type('12345');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should(
        'have.text',
        'Epic sadface: Username and password do not match any user in this service'
    );
    cy.get('[data-test="error"]').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })

  it('Should be able to reset error', () => {
    cy.visit('https://www.saucedemo.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="username"]').type('standart');
    cy.get('[data-test="password"]').type('12345');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should(
        'have.text',
        'Epic sadface: Username and password do not match any user in this service'
    );
    cy.get('[data-test="error"]').should('be.visible');
    /* ==== End Cypress Studio ==== */

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.error-button').click();
    /* ==== End Cypress Studio ==== */
  })

  it('Should be able to login using correct data', () => {
    cy.visit('https://www.saucedemo.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('.title').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })



})
