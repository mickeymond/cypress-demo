describe('Instagram Landing Page', () => {
  it('Able To Visit Landing Page', () => {
    cy.visit('https://instagram.com')
      .contains('Sorry, this page isn\'t available.');
  });
});