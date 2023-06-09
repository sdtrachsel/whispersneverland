describe('New Journal Entry Image', () => {
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
      .get('[data-cy="newentry-btn"]').click()
      .get('.title-input').type('This is my dream title')
      .get('.date-input').type('2023-06-13')
      .get('textarea').type('This is my really long dream description for testing.')
      .get('input[type="submit"]').click()
  });

  it('should display a header with logo and navigation links', () => {
    cy.get('[data-cy="link-home"]').should('have.attr', 'href', '/')
      .get('.logo').should('have.attr', 'alt', 'Whispers from Neverland')
      .get('[data-cy="link-journal"]').should('have.attr', 'href', '/journal')
      .get('[data-cy="link-newentry"]').should('have.attr', 'href', '/newentry')
  })

  it('Should only allow the user to search when search criteria is entered', () => {
    cy.get('.search-btn').should('be.disabled')
      .get('input[type="search"]').type('pickles')
      .get('.search-btn').should('not.be.disabled')
  })

  it('Should allow user to search for images', () => {
    cy.get('input[type="search"]').type('pickles')
      .get('.search-btn').click()
      .get('.result-image').should('have.length', 6)
      .get('.result-image').first().should('have.attr', 'alt', 'green cucumber on white background')
      .get('.result-image').last().should('have.attr', 'alt', 'several jars of pickled red peppers on a shelf')
  })

  it('Should allow user to search for different images', () => {
    cy.get('input[type="search"]').type('pickles')
      .get('.search-btn').click()
      .get('.result-image').should('have.length', 6)
      .get('input[type="search"]').clear().type('tacos')
      .get('.search-btn').click()
      .get('.result-image').should('have.length', 6)
      .get('.result-image').first().should('have.attr', 'alt', 'sliced cucumber and green vegetable salad on white ceramic plate')
      .get('.result-image').last().should('have.attr', 'alt', 'brown bread with green vegetable and red sauce on white ceramic plate')
  })

  it('Should let the user know if no images were found', () => {
    cy.intercept('GET', 'https://api.unsplash.com/search/photos?page=1&query=hfq&per_page=6&orientation=squarish&client_id=GzruG8Ldx8n3qfsS9ft8aYDxnYUIjzOoamZHJc8yrXo', {
      statusCode: 200,
      fixture: 'no_search_results'
    })

    cy.get('input[type="search"]').type('hfq')
      .get('.search-btn').click()
      .get('p').contains('No images found')
  })

  it('Should let the user know if there was a problem getting the images', () => {
    cy.intercept('GET', ' https://api.unsplash.com/search/photos?page=1&query=pickles&per_page=6&orientation=squarish&client_id=GzruG8Ldx8n3qfsS9ft8aYDxnYUIjzOoamZHJc8yrXo', {
      statusCode: 500,
    })
    cy.get('input[type="search"]').type('pickles')
      .get('.search-btn').click()
      .get('p').contains('Someting went wrong. Please try again later.')
  })

  it('Should only allow the user to save when an image is selected ', () => {
    cy.get('input[type="search"]').type('pickles')
      .get('.search-btn').click()
      .get('.img-save-btn').should('be.disabled')
      .get('.result-image').first().click()
      .get('.img-save-btn').should('not.be.disabled')
  })

  it('Should allow user select and save the image to their journal', () => {
    cy.get('input[type="search"]').type('pickles')
      .get('.search-btn').click()
      .get('.result-image').first().click()
      .get('.img-save-btn').click()
      .get('.card-img').first().should('have.attr', 'alt', 'green cucumber on white background')
  })

  it('Should take the user to their journal once an image is saved', () => {
    cy.get('input[type="search"]').type('pickles')
      .get('.search-btn').click()
      .get('.result-image').first().click()
      .get('.img-save-btn').click()
      .url().should('eq', "http://localhost:3000/journal")
  })
})