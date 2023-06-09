describe('error page', () => {
  it('should display an error page if the user goes to a bad url path', () => {
    cy.visit('http://localhost:3000/1686333195824')
    .get('.error-text').first().contains('Sorry Dreamer,')
    .get('.error-text').last().contains("this page doesn't exist")
    .visit('http://localhost:3000/potato')
    .get('.error-text').first().contains('Sorry Dreamer,')
    .get('.error-text').last().contains("this page doesn't exist")
  })
})