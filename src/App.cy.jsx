import App from './App'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)

    cy.get('.handle').trigger('mousedown', { force: true})

    let handleCoords = {x:0, y:0}
    cy.get('.handle').then($el => {
      const {top, left, width} = $el[0].getBoundingClientRect()
      handleCoords = {x: left + width /2, y: top}

      new Array(20).fill(null).forEach((_, i) => {
        cy.get('.handle').trigger('mousemove', {clientX: handleCoords.x + i * 20, clientY: handleCoords.y + i * 20, force: true})
      });

      cy.get('.handle').trigger('mouseup', {force: true})
    })
  })
})