const BASE_URL="https://www.smood.ch"

describe('Visiting the website', () => {
  it('Visiting the en title page et changing the language',() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    cy.visit(`${BASE_URL}`)
    cy.get('h1').should('have.text', 'Delivery or Click & Collect from your favourite restaurants')
    cy.get('.locale-switch-expend > a').eq(1).click()
    cy.get('h1').should('have.text', 'Livraison ou Click & Collect de vos restaurants préférés')
    cy.get('.locale-switch-expend > a').eq(2).click()
    cy.get('h1').should('have.text', 'Lieferung oder Click & Collect Ihre Lieblingsrestaurants')
    cy.get('.locale-switch-expend > a').eq(3).click()
    cy.get('h1').should('have.text', 'Consegna o Click & Collect dei vostri ristoranti preferiti')
  })

  it('Searching an address and see the restaurant', { scrollBehavior: false },() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    cy.visit(`${BASE_URL}/en`)
    cy.get('[data-cy=Home_Input_AddressSelectorAutocomplete]').eq(1).type('25 rue de la Navi')
    cy.wait(150)
    cy.get('.autocomplete-dropdown li').eq(0).click()
    cy.wait(150)
    cy.get('[data-cy=Home_Button_SearchRestaurant]').eq(0).click()
    cy.url().should('contain', '/delivery/restaurants/')
  })

  /**
  * Use the option :
  *
  * "experimentalStudio": true
  *
  * inside the cypress.json confg for using cypress studio
  **/
  it('create new test', () => {
    // Generated test
  })
})
