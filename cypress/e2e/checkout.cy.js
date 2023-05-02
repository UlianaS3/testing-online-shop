describe('Checkout page testing', () => {

    it('Should be visible elements on the checkout', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').should('be.visible');
        cy.get('[data-test="lastName"]').should('be.visible');
        cy.get('[data-test="postalCode"]').should('be.visible');
        cy.get('[data-test="firstName"]').should('have.attr', 'placeholder', 'First Name');
        cy.get('[data-test="lastName"]').should('have.attr', 'placeholder', 'Last Name');
        cy.get('[data-test="postalCode"]').should('have.attr', 'placeholder', 'Zip/Postal Code');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test="cancel"]').should('be.visible');
        cy.get('[data-test="continue"]').should('be.visible');
        cy.get('.title').should('have.text', 'Checkout: Your Information');
        /* ==== End Cypress Studio ==== */
    })

    it('Should see error when field First name is empty when submit button is clicked', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();


        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="lastName"]').type('Last name');
        cy.get('[data-test="postalCode"]').type('Zip');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('be.visible');
        cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required');
        /* ==== End Cypress Studio ==== */
    })

    it('Should see error when field Last name is empty when submit button is clicked', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('First');
        cy.get('[data-test="postalCode"]').type('Zip');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('be.visible');
        cy.get('[data-test="error"]').should('have.text', 'Error: Last Name is required');
        /* ==== End Cypress Studio ==== */
    })

    it('Should see error when field Zip is empty when submit button is clicked', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('First');
        cy.get('[data-test="lastName"]').type('Last');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('be.visible');
        cy.get('[data-test="error"]').should('have.text', 'Error: Postal Code is required');
        /* ==== End Cypress Studio ==== */
    })

    it('Should able to reset error when submit button is clicked and errors appear', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('First');
        cy.get('[data-test="lastName"]').type('Last');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('be.visible');
        cy.get('[data-test="error"]').should('have.text', 'Error: Postal Code is required');
        /* ==== End Cypress Studio ==== */

        /* ==== Generated with Cypress Studio ==== */
        cy.get('.error-button > .svg-inline--fa').click();
        cy.get('[data-test="error"]').should('not.exist');
        /* ==== End Cypress Studio ==== */
    })

    it('should be able to do successful order', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('First');
        cy.get('[data-test="lastName"]').type('Last');

        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test="postalCode"]').type('Zip');
        cy.get('[data-test="continue"]').click();
        cy.get('.title').should('have.text', 'Checkout: Overview');
        cy.get('.summary_info > :nth-child(1)').should('have.text', 'Payment Information');
        cy.get('.summary_info > :nth-child(3)').should('have.text', 'Shipping Information');
        cy.get('.summary_info > :nth-child(5)').should('have.text', 'Price Total');
        /* ==== End Cypress Studio ==== */

        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test="finish"]').click();
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');
        cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        cy.get('.title').should('have.text', 'Checkout: Complete!');
        cy.get('.pony_express').should('be.visible');
        cy.get('[data-test="back-to-products"]').should('be.visible');
        cy.get('[data-test="back-to-products"]').click();
        cy.get('.title').should('have.text', 'Products');
        /* ==== End Cypress Studio ==== */
    })

})
