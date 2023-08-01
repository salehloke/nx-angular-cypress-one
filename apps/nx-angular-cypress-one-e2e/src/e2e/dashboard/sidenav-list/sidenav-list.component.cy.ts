describe('nx-angular-cypress-one', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sidenavlistcomponent--primary'));
  it('should render the component', () => {
    cy.get('nx-angular-cypress-one-sidenav-list').should('exist');
  });
});
