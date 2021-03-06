
const sentArgs = { username: 'Biruleibe', password: 'leibe'}

it('Rodando o mesmo teste visitando diferentes domínios', () => {
  cy.visit('/')
  cy.contains('a', 'DEV Community')
  .should('be.visible')
  .click()
  cy.origin('https://dev.to/walmyrlimaesilv', () => {
   cy.get('.site-logo img')
   .should('be.visible')
   cy.contains('a',  Cypress.config('baseUrl'))
    .should('be.visible')
    .invoke('removeAttr', 'target')
    .click()
  })
  cy.url().should('be.equal',   `${Cypress.config('baseUrl')}/`)
  cy.scrollTo('bottom')
  cy.contains('p', 'See this project on GitHub')
  .should('be.visible')
  cy.contains('a', 'on GitHub').click()
  cy.origin('https://github.com/wlsf82/walmyr-nextjs', () => {
  cy.get('header .octicon-mark-github')
  .should('be.visible')
  cy.contains('.Layout-sidebar a', 'walmyr.dev')
  .should('be.visible')
  .invoke('removeAttr', 'target')
  .click()
  })
})