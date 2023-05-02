describe('Catalog page testing', () => {

  it('Should see control elements on the catalog page', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shopping_cart_link').should('be.visible');
    cy.get('[data-test="product_sort_container"]').should('be.visible');
    cy.get('.title').should('have.text', 'Products');
    cy.get('.title').should('be.visible');
    cy.get('.app_logo').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })

  it('Should be able to add product to cart when click on button Add to cart', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();


    /* ==== Generated with Cypress Studio ==== */
    cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('.shopping_cart_badge').should('be.visible');
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shopping_cart_link').click();
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
    /* ==== End Cypress Studio ==== */
  })


  it('Should be able to remove a product from cart when click on button Remove in catalog', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();


    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('not.exist');
    /* ==== End Cypress Studio ==== */
  })


})
