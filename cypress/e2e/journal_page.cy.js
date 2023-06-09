describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', ' https://api.unsplash.com/search/photos?page=1&query=pickles&per_page=6&orientation=squarish&client_id=GzruG8Ldx8n3qfsS9ft8aYDxnYUIjzOoamZHJc8yrXo', {
      statusCode: 200,
      fixture: 'pickles_result'
    })

    cy.intercept('GET', 'https://api.unsplash.com/search/photos?page=1&query=tacos&per_page=6&orientation=squarish&client_id=GzruG8Ldx8n3qfsS9ft8aYDxnYUIjzOoamZHJc8yrXo', {
      statusCode: 200,
      fixture: 'tacos_result'
    })

    cy.visit("http://localhost:3000/")
      .get('[data-cy="link-newentry"]').click()
      .get('.title-input').type('first title')
      .get('.date-input').type('2023-06-13')
      .get('textarea').type('First really long dream description for testing.')
      .get('input[type="submit"]').click()
      .get('input[type="search"]').type('pickles')
      .get('.search-btn').click()
      .get('.result-image').first().click()
      .get('.img-save-btn').click()
      .get('[data-cy="link-newentry"]').click()
      .get('.title-input').type('second title')
      .get('.date-input').type('2023-04-10')
      .get('textarea').type('Second really long dream description for testing.')
      .get('input[type="submit"]').click()
      .get('input[type="search"]').type('tacos')
      .get('.search-btn').click()
      .get('.result-image').first().click()
      .get('.img-save-btn').click()
      .get('[data-cy="link-newentry"]').click()
      .get('.title-input').type('third title')
      .get('.date-input').type('2023-06-10')
      .get('textarea').type('Third really long dream description for testing.')
      .get('input[type="submit"]').click()
      .get('input[type="search"]').type('tacos')
      .get('.search-btn').click()
      .get('.result-image').last().click()
      .get('.img-save-btn').click()

  });

  it('should be at /journal', () => {
    cy.url().should('eq', "http://localhost:3000/journal")
  })

  it('should display a header with logo and navigation links', () => {
    cy.get('[data-cy="link-home"]').should('have.attr', 'href', '/')
      .get('.logo').should('have.attr', 'alt', 'Whispers from Neverland')
      .get('[data-cy="link-journal"]').should('have.attr', 'href', '/journal')
      .get('[data-cy="link-newentry"]').should('have.attr', 'href', '/newentry')
  })

  it('should show the user a list of the their journal entries', () => {
    cy.get('.card-link').should('have.length', 3)
      .get('.card-link').first().get('.overlay-title').contains('first title')
      .get('.card-link').last().get('.overlay-title').contains('second')
  })

  it('should show the user entries in reverse-chronological order ', () => {
    cy.get('.card-link').eq(0).get('.overlay-date').contains('06.13.2023')
      .get('.card-link').eq(1).get('.overlay-date').contains('06.10.2023')
      .get('.card-link').eq(2).get('.overlay-date').contains('04.10.2023')
  })

  it('should update the order if a new entry is added ', () => {
    cy.get('[data-cy="link-newentry"]').click()
      .get('.title-input').type('fourth title')
      .get('.date-input').type('2023-05-10')
      .get('textarea').type('Third really long dream description for testing.')
      .get('input[type="submit"]').click()
      .get('input[type="search"]').type('tacos')
      .get('.search-btn').click()
      .get('.result-image').last().click()
      .get('.img-save-btn').click()
      .get('.card-link').eq(2).get('.overlay-date').contains('05.10.2023')

  })

  it('should allow the user to filter by date', () => {
    cy.get('input[type="date"]').type('2023-06-13')
      .get('.filter-btn').click()
      .get('.overlay-title').contains('first title')
  })

  it('should only allow the user to filter when a date is selected', () => {
    cy.get('.filter-btn').should('be.disabled')
      .get('input[type="date"]').type('2023-06-13')
      .get('.filter-btn').should('not.be.disabled')
  })

  it('should allow the user to filter by a different date', () => {
    cy.get('input[type="date"]').type('2023-06-13')
      .get('.filter-btn').click()
      .get('input[type="date"]').clear().type('2023-06-10')
      .get('.filter-btn').click()
      .get('.card-link').first().get('.overlay-title').contains('third title')
  })

  it('should allow the user clear the filter', () => {
    cy.get('input[type="date"]').type('2023-06-13')
      .get('.filter-btn').click()
      .get('.card-link').should('have.length', 1)
      .get('.clear-btn').click()
      .get('.card-link').should('have.length', 3)
  })

  it('should let the user know if no entries were found with filtered date', () => {
    cy.get('input[type="date"]').type('2023-06-01')
      .get('.filter-btn').click()
      .get('p').contains('No Entries Found')
  })

  it('should take the user to the journal entry page when an entry is selected', () => {
    cy.get('.card-link').first().click()
      .get('h1').contains('first title')
  })
})