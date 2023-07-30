describe('nx-angular-cypress-one', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dashboardcomponent--primary'));
  it('should render the component', () => {
    cy.get('nx-angular-cypress-one-dashboard').should('exist');
  });
});
