
/// <reference types="Cypress" />

describe('Central de atendimento ao cliente TAT', function() {
    beforeEach(() => cy.visit('./src/index.html'))

    it('verifica o titulo da aplicacao', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatorios e envia o formulario', function() {
        cy.get('#firstName').type('cypress', {delay: 100})
        cy.get('#lastName').type('Automation')
        cy.get('#email').type('cypress@automation.com')
        cy.get('#phone').type('11 999999999')
        cy.get('#product').select('cursos')
        cy.get('#email-checkbox').click()
        cy.get('#open-text-area').type('No comments')
        cy.get('.button').click()

        cy.get('.success').should('be.visible')
            //.should('be.equal', "Mensagem foi enviada com sucesso")
    })

    it('preenche os campos obrigatorios com email invalido e envia o formulario', function() {
        cy.get('#firstName').type('cypress', {delay: 100})
        cy.get('#lastName').type('Automation')
        cy.get('#email').type('cypressautomation.com')
        cy.get('#phone').type('11 999999999')
        cy.get('#product').select('cursos')
        cy.get('#email-checkbox').click()
        cy.get('#open-text-area').type('No comments')
        cy.get('.button').click()

        cy.get('.error').should('be.visible')
            //.should('be.equal', "Mensagem foi enviada com sucesso")
    })

    it('exibe apenas numeros no campo c', function(){
        cy.get('#phone').type('teste').should('have.value', '')
    })

    it('exercicio 5', function() {
        cy.get('#firstName').type('cypress', {delay: 100})
        cy.get('#lastName').type('Automation')
        cy.get('#email').type('cypressautomation.com')
        cy.get('#product').select('cursos')
        cy.get('#email-checkbox').click()
        cy.get('#open-text-area').type('No comments')
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })

    it('exercicio 6', function(){
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })

    it('Exercicio 7', function(){
        cy.fillForm()
        cy.get('.success').should('be.visible')
    })

    it('Exercicio 8', function() {
        cy.get('#firstName').type('cypress', {delay: 100})
        cy.get('#lastName').type('Automation')
        cy.get('#email').type('cypressautomation.com')
        cy.get('#product').select('cursos')
        cy.get(':nth-child(4) > input').check().should('be.checked')
        cy.get('#email-checkbox').check().should('be.checked')

    })

    it('Exercicio 9', function() {
        cy.get('#file-upload')
            .selectFile('./cypress/fixtures/example.json')
    })

    it.only('exercicio 9 ', function() {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
        cy.get('#privacy a')
        .invoke('removeAttr', 'target').click()
        
    })
})

