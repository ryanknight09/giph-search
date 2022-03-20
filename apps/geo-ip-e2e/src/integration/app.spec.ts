describe('geo-ip', () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit('/');
  });

  it('redirects automatically to the "/home" route from "/" route', () => {
    cy.url().should('include', '/home');
  });

  it('typing in the text field should change the input value and automatically show three gifs on the screen', () => {
    cy.get('input').type('pizza').should('have.value', 'pizza');

    cy.get('img').should('have.length', 3);
  });

  it('a blank text input should render zero gifs', () => {
    cy.get('input').type('pizza').should('have.value', 'pizza').clear();

    cy.get('img').should('have.length', 0);
  });

  it('text input greate that 50 should render zero gifs, not search and show error state', () => {
    const inputWithLength50 =
      'pizzapizzapizzapizzapizzapizzapizzapizzapizzapizzapizza';

    cy.get('input').type(inputWithLength50);

    cy.get('p').contains('must be 50 or less characters');

    cy.get('img').should('have.length', 0);

    cy.intercept(/search/, cy.spy().as('searchApi'));
    cy.get('@searchApi').its('callCount').should('equal', 1);
  });

  it('verify fetch happens', () => {
    cy.get('input').type('pizza').should('have.value', 'pizza');

    cy.intercept(/search/, cy.spy().as('searchApi'));
    cy.get('@searchApi').its('callCount').should('equal', 1);
  });
});
