describe('template spec', () => {
  beforeEach(() => {
    cy.session("eve", () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        body: { 
          email: "eve.holt@reqres.in", 
          password: "cityslicka" 
        },
      }).then(({ body }) => {
        window.localStorage.setItem('token', body.token)
      })
    })
  })
  it('passes', () => {
    cy.visit('/users')
    cy.contains("Notre super liste d'utilisateur provenant de l'api reqres.in")
    cy.get(':nth-child(1) > .p-5 > .text-xl > a').click()
    cy.get('.w-full').should('be.visible')
  })
})