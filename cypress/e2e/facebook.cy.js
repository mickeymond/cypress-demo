describe('Facebook Landing Page', () => {
  it('Able To Visit Landing Page', () => {
    cy.visit('https://facebook.com')
      .contains('Connect with friends and the world around you on Facebook.');
  });
});