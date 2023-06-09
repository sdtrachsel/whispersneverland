describe('New Journal Entry', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
    .get('[data-cy="newentry-btn"]').click()
  });

  it('should be at /newentry', () => {
    cy.url().should('eq', "http://localhost:3000/newentry") 
  })

  it('should display a header with logo and navigation links', () => {
    cy.get('[data-cy="link-home"]').should('have.attr', 'href', '/')
      .get('.logo').should('have.attr', 'alt', 'Whispers from Neverland')
      .get('[data-cy="link-journal"]').should('have.attr', 'href', '/journal')
      .get('[data-cy="link-newentry"]').should('have.attr', 'href', '/newentry')
  })

  it('Should contain a form', () => {
    cy.get('h1').contains('Journal Entry')
    .get('h2').contains('Dream Details')
    .get('.title-input').should('have.attr', 'type', 'text')
    .get('.date-input').should('have.attr', 'type', 'date')
    .get('textarea').should('exist')
    .get('input[type="submit"]').should('exist')
  })

  it('Should allow a user to complete the form and move onto selecting an image', () => {
    cy.get('.title-input').type('This is my dream title')
      .get('.date-input').type('2023-06-13')
      .get('textarea').type('This is my really long dream description for testing.')
      .get('input[type="submit"]').click()
      .get('h1').contains('Select your Image')
  })

  it('Should indicate to a user if field are not complete and only allow submit when all are complete', () => {
    cy.get('input[type="submit"]').click()
      .get('.title-input').should('have.class','error')
      .get('.date-input').should('have.class','error')
      .get('.descript-input').should('have.class','error')
      .get('.title-input').type('This is my dream title')
      .get('input[type="submit"]').click()
      .get('.date-input').should('have.class','error')
      .get('.descript-input').should('have.class','error')
      .get('.date-input').type('2023-06-13')
      .get('input[type="submit"]').click()
      .get('.descript-input').should('have.class','error')
      .get('.descript-input').type('This is my really long dream description for testing.')
      .get('input[type="submit"]').click()
      .get('h1').contains('Select your Image')
  })


})