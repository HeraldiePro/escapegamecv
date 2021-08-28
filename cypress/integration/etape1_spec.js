describe('Acceuil:', function() {
    beforeEach(function() {
        cy.visit('/enigmes');
    });
    it('Test Employé polyvalent en restauration rapide',() => {
        cy.get('[data-testid=TitleEtape1]')
        .should('be.visible')
        .should('have.text', 'Employé polyvalent en restauration rapide')
    })

    it('Test p1',() => {
        cy.get('[data-testid=p1Etape1]')
        .should('be.visible')
        .should('have.text', 'Comme beaucoup de jeunes actif je commençai par travailler en restauration rapide, je dois bien admettre que ce domaine professionnel bien que très éloigné de mes valeurs fut au final une expérience intéressante car elle m’a permis de développer mon contact clientèle en travaillant en caisse.')
    })

    it('Test h2Etape1',() => {
        cy.get('[data-testid=h2Etape1]')
        .should('be.visible')
        .should('have.text', "L'énigme est donc la suivante")
    })

    it('Test ContentMenuEtape1',() => {
        cy.get('[data-testid=ContentMenuEtape1]')
        .should('be.visible')
    })

    it('Test inputEtape1',() => {
        cy.get('[data-testid=inputEtape1]')
        .should('be.visible')
    })
    
    it('Test SubmitEtape1',() => {
        cy.get('[data-testid=SubmitEtape1]')
        .should('be.visible')
    })

    it('Test NextStep',() => {
        cy.get('[data-testid=NextStep]')
        .should('be.not.visible')
    })

    it('False answer',() => {
        cy
        .get("[data-testid=inputEtape1]")
        .invoke('val', 'error')
        
        cy.get('[data-testid=SubmitEtape1]')
        .click()
        
        cy
        .get("[data-testid=textErrorEtape1]")
        .should('be.visible')

        cy.get('[data-testid=NextStep]')
        .should('be.not.visible')
    })

    it('Good answer',() => {
        cy
        .get("[data-testid=inputEtape1]")
        .type('24,3')
        
        cy.get('[data-testid=SubmitEtape1]')
        .click()
        
        cy
        .get("[data-testid=succesTextEtape1]")
        .should('be.visible')

        cy.get('[data-testid=NextStep]')
        .should('be.visible')
        .click()

        cy.get('[data-testid=Etape2Title]')
        .should('be.visible')
    })
});