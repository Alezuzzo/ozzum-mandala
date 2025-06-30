describe('cypress home', () => {
  it('Displays mandala thumbnails', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="cypress-thumbnail"]').should('have.length.gt', 0)
  })
  it('Navigates to other pages', () => {
    cy.visit('http://localhost:5173/')
    
    cy.get('[data-testid="cypress-gallery"]').contains('Galeria').click();
  })
  it('Shows artist biography', () => {
    cy.visit('http://localhost:5173/about')
    
    cy.get('[data-testid="cypress-artist"]').should('not.be.empty')
  })
  it('Navigates to other pages', () => {
    cy.visit('http://localhost:5173/about')
    
    cy.get('[data-testid="cypress-photo"]').should('be.visible').and('have.prop', 'naturalWidth').should('be.gt', 0)
  })
})