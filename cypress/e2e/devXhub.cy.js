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

     //need to scroll page
     // Scroll down
     for (let i = 0; i < 20; i++) {
      cy.scrollTo(0, 900 * (i + 1));
      cy.wait(500);
  }


   
    });
  });
