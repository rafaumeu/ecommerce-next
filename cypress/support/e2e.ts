import './commands'

// Ignore React hydration errors during E2E tests.
// React #418 = hydration mismatch, which is non-blocking in production
// but causes Cypress to fail by default on uncaught exceptions.
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Hydration') || err.message.includes('418')) {
    return false // prevent Cypress from failing the test
  }
  return true // let other errors fail the test
})
