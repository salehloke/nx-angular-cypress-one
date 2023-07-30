describe('nx-angular-cypress-one', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('nx-angular-cypress-one-nx-welcome').should('exist');
  });
});
