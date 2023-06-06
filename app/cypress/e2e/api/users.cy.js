context('GET /users', () => {
	it('gets a list of users', () => {
		cy.request('GET', 'https://reqres.in/api/users').then((response) => {
			expect(response.status).to.eq(200)
		})
	})
})

context('GET /users/id', () => {
	it('gets a user', () => {
		cy.request('GET', 'https://reqres.in/api/users/4').then((response) => {
			expect(response.status).to.eq(200)
		})
	})
})
