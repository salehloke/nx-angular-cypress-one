describe('nx-angular-cypress-one', () => {
  beforeEach(() => cy.visit('/iframe.html?id=topbarcomponent--primary'));
  it('should render the component', () => {
    cy.get('nx-angular-cypress-one-topbar').should('exist');
  });
});
