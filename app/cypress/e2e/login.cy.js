describe('template spec', () => {
  it('passes', () => {
    cy.visit('')
    cy.get('.py-2').click()
    cy.get('#email').type('eve.holt@reqres.in')
    cy.get('#password').type('cityslicka')
    cy.get('.text-white').click()
    cy.contains("Notre super liste d'utilisateur provenant de l'api reqres.in")
  })
})