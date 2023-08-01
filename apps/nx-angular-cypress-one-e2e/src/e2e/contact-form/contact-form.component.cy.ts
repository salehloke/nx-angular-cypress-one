describe('nx-angular-cypress-one', () => {
  beforeEach(() => cy.visit('/iframe.html?id=contactformcomponent--primary'));
  it('should render the component', () => {
    cy.get('nx-angular-cypress-one-contact-form').should('exist');
  });
});
