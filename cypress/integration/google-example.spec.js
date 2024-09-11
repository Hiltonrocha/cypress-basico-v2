describe('Google example', function(){

    it('Acessa o google e realiza a busca', function(){
        cy.visit('https://www.google.com.br')
        cy.get('textarea[title="Pesquisar"]').type('Cypress{enter}')
        cy.get('#search').should('be.visible');

    cy.get('h3')
      .should('have.length.at.least', 10)
      .each((element, index) => {
        if (index < 10) {
          // Imprime o texto do título no console
          cy.log(`Resultado ${index + 1}: ${element.text()}`);
          cy.wrap(element).invoke('text').then((text) => {
            cy.log(text);
          });
        }
      });
    })


})