const BASE_URL="https://www.smood.ch"

describe('Visiting the website', () => {
  it('Visiting the en title page et changing the language',() => {
    cy.visit(`${BASE_URL}`)
    cy.get('h1').should('have.text', 'Fail')
  })
})
