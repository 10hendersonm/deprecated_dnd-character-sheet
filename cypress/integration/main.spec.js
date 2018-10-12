describe('Main', () => {
  it('Renders', () => {
    cy.visit('http://localhost:3000')
  })

  it('Has a main div', () => {
    expect(cy.get('[data-cy="main"]')).to.exist
  })
})