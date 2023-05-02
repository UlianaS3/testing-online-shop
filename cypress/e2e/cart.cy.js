describe('Cart page testing', () => {

    it('should be visible elements on the cart', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="continue-shopping"]').should('be.visible');
        cy.get('[data-test="continue-shopping"]').should('have.text', 'Continue Shopping');
        cy.get('[data-test="checkout"]').should('be.visible');
        cy.get('[data-test="checkout"]').should('have.text', 'Checkout');
        cy.get('.title').should('have.text', 'Your Cart');
        cy.get('.cart_quantity_label').should('have.text', 'QTY');
        cy.get('.cart_quantity_label').should('be.visible');
        cy.get('.cart_desc_label').should('be.visible');
        cy.get('.cart_desc_label').should('have.text', 'Description');
        /* ==== End Cypress Studio ==== */
    })

    it('Should be able to remove product from the cart', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();


        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.shopping_cart_badge').should('have.text', '1');
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_badge').should('not.exist');
        /* ==== End Cypress Studio ==== */
    })

})
