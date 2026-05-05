describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('should render the home page with product links', () => {
    cy.get('a[href^="/product"]').should('have.length.at.least', 1)
  })

  it('should be able to navigate to the product page and add it to the cart', () => {
    cy.get('a[href^="/product"]').first().invoke('attr', 'href').then((href) => {
      cy.visit(href as string)
    })
    cy.get('h1', { timeout: 10000 }).should('exist')
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })

  it('should not be able to add the same product twice', () => {
    cy.get('a[href^="/product"]').first().invoke('attr', 'href').then((href) => {
      cy.visit(href as string)
    })
    cy.get('h1', { timeout: 10000 }).should('exist')
    // First click adds to cart and opens sidebar
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
    // Close cart sidebar
    cy.get('body').type('{esc}')
    // Wait for sidebar to close
    cy.wait(500)
    // Second click — should be blocked (duplicate)
    cy.contains('Adicionar ao carrinho').click({ force: true })
    // Cart count should still be 1
    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for a product and add it to the cart', () => {
    cy.searchByQuery('camiseta')
    cy.get('a[href^="/product"]').should('have.length.at.least', 1)
    cy.get('a[href^="/product"]').first().invoke('attr', 'href').then((href) => {
      cy.visit(href as string)
    })
    cy.get('h1', { timeout: 10000 }).should('exist')
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })
})
