describe('journal entry', () => {
  beforeEach(() => {
    cy.intercept('GET', ' https://api.unsplash.com/search/photos?page=1&query=pickles&per_page=6&orientation=squarish&client_id=GzruG8Ldx8n3qfsS9ft8aYDxnYUIjzOoamZHJc8yrXo', {
      statusCode: 200,
      fixture: 'pickles_result'
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
      .get('.card-link').first().click()

  });

  it('should have a url matching the entry id', () => {
    const now = Date.now().toString().slice(0, 5)
    cy.url().then((url) => {
      const timestampFromUrl = url.split('/')[3];
      expect(timestampFromUrl.slice(0, 5)).to.equal(now);
    });
  })

  it('should display a header with logo and navigation links', () => {
    cy.get('[data-cy="link-home"]').should('have.attr', 'href', '/')
      .get('.logo').should('have.attr', 'alt', 'Whispers from Neverland')
      .get('[data-cy="link-journal"]').should('have.attr', 'href', '/journal')
      .get('[data-cy="link-newentry"]').should('have.attr', 'href', '/newentry')
  })

  it('should contain the journal entry inforamtion', () => {
    cy.get('.single-date').contains('06.13.2023')
      .get('.single-title').contains('first title')
      .get('.single-desc').contains('First really long dream description for testing.')
      .get('.single-img').should('have.attr', 'alt', 'green cucumber on white background')
  })

  it('should allow the user to add an image if the image is the defualt image', () => {
    cy.get('[data-cy="link-newentry"]').click()
      .get('.title-input').type('second title')
      .get('.date-input').type('2023-06-14')
      .get('textarea').type('second really long dream description for testing.')
      .get('input[type="submit"]').click()
      .get('[data-cy="link-journal"]').click()
      .get('.card-link').first().click()
      .get('.single-img').should('have.attr', 'alt', 'No image available')
      .get('.add-img-btn').should('exist').click()
      .get('input[type="search"]').type('pickles')
      .get('.search-btn').click()
      .get('.result-image').first().click()
      .get('.img-save-btn').click()
      .get('.card-link').first().click()
      .get('.single-img').should('have.attr', 'alt', 'green cucumber on white background')
      .get('.add-img-btn').should('not.exist')

  })


})