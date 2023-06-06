describe('template spec', () => {
  it('passes', () => {
    cy.visit('')
    cy.get('.font-light > .font-medium').click()
    cy.get('#email').type('eve.holt@reqres')
    cy.get('#password').type('cityslicka')
    cy.get('.text-white').click()
  })
})