describe('Google Landing Page', () => {
  it('Able To Visit Landing Page', () => {
    cy.visit('https://google.com')
      .contains('Google offered in');
  });
});