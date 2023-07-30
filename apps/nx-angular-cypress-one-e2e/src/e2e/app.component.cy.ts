describe('nx-angular-cypress-one', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('nx-angular-cypress-one-root').should('exist');
  });
});
