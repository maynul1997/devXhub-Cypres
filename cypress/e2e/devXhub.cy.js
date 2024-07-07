describe('Google Search and Gradual Scroll Test', () => {
  it('should perform a search and scroll through the results gradually', () => {
    // Visit the Google homepage
    cy.visit('https://devxhub.com/');

    // Accept cookies if the consent form appears (optional, based on your location)
    cy.get('button').then(($btn) => {
      if ($btn.text().includes('I agree') || $btn.text().includes('Accept all')) {
        cy.wrap($btn).click();
      }
    });

    // Enter the search term
    cy.get('.gLFyf').type('Cypress testing framework');

    // Click the Google search button by its text
    cy.contains('input', 'Google Search').click();

    // Wait for the search results to appear
    cy.get('#search').should('be.visible');

    // Verify that the search results contain the expected text
    cy.get('#search').contains('Cypress.io').should('be.visible');

   
    });
  });
