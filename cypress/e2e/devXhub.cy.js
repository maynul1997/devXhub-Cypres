describe('Google Search and Gradual Scroll Test', () => {
  it('should perform a search and scroll through the results gradually', () => {
    // Visit the target website
    cy.visit('https://devxhub.com/');

    // Accept cookies if the consent form appears (optional, based on your location)
    cy.get('button').then(($btn) => {
      if ($btn.text().includes('I agree') || $btn.text().includes('Accept all')) {
        cy.wrap($btn).click();
      }
    });

    cy.viewport(1920, 1080)

    //This line for tab view Button where all menu remains hidden
    //cy.get('.h-8.w-8.cursor-pointer').click();
    
    // Define a function to scroll smoothly
    const smoothScroll = (direction = 'down', stepSize = 500, duration = 1500, waitTime = 750) => {
      cy.document().then((doc) => {
        const totalHeight = doc.body.scrollHeight;
        const steps = Math.ceil(totalHeight / stepSize);
        

        for (let i = 0; i < steps; i++) {
          const position = direction === 'down' ? stepSize * (i + 1) : stepSize * (steps - i - 1);
          cy.scrollTo(0, position, { duration });
          cy.wait(waitTime);
        }
      });
    };
  
   

    // Scroll down smoothly
    smoothScroll('down');

    // Scroll up smoothly
    smoothScroll('up');

  
  
  });
});

