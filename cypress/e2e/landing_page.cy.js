describe('landing page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  });

  it('should display a header with logo and navigation links', () => {
    cy.get('[data-cy="link-home"]').should('have.attr', 'href', '/')
      .get('.logo').should('have.attr', 'alt', 'Whispers from Neverland')
      .get('[data-cy="link-journal"]').should('have.attr', 'href', '/journal')
      .get('[data-cy="link-newentry"]').should('have.attr', 'href', '/newentry')
  })

  it('should welcome the user to the page', () => {
    cy.get("h1").contains("Welcome")
      .get('.dreamer').contains("Dreamer")
      .get('.greeting-par').should('have.length', 2)
      .first().contains('Welcome to Whispers from Neverland,')
      .get('.greeting-bottom').contains("Let's sail through these stars of self-discovery.")
  })

  it('should have a button to start a new journal entry', () => {
    cy.get('[data-cy="link-newentry-btn"]').should('have.attr', 'href', '/newentry')
      .get('[data-cy="newentry-btn"]').contains('Start a New Entry')
  })
})