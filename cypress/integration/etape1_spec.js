describe('Etape 1:', function() {
    beforeEach(function() {
        cy.visit('/enigmes');
    });
    it('Test title',() => {
        cy.get('[data-testid=Title]')
        .should('be.visible')
        .should('have.text', 'Employé polyvalent en restauration rapide')
    })

    it('Test p1',() => {
        cy.get('[data-testid=p1]')
        .should('be.visible')
        .should('have.text', 'Comme beaucoup de jeunes actif je commençai par travailler en restauration rapide, je dois bien\nadmettre que ce domaine professionnel bien que très éloigné de mes valeurs fut au final une\nexpérience intéressante car elle m’a permis de développer mon contact clientèle en travaillant en\ncaisse.')
    })

    it('Test h2',() => {
        cy.get('[data-testid=h2]')
        .should('be.visible')
        .should('have.text', "L'énigme est donc la suivante")
    })

    it('Test enoncer',() => {
        cy.get('[data-testid=enoncer]')
        .should('be.visible')
        .should('have.text', 'Arthur et mathilde souhaite commander 2 menus mega Sunday ainsi qu’un cheeseburger chacun il\ncommande ensemble et dispose d’une carte étudiant. Qu’elle somme devront -ils régler ?')
    })

    it('Test ContentCard',() => {
        cy.get('[data-testid=ContentCard]')
        .should('be.visible')
    })

    it('Test inputEtape1',() => {
        cy.get('[data-testid=input]')
        .should('be.visible')
    })
    
    it('Test SubmitEtape1',() => {
        cy.get('[data-testid=Submit]')
        .should('be.visible')
    })

    it('Test NextStep',() => {
        cy.get('[data-testid=NextStep]')
        .should('be.not.visible')
    })

    it('False answer',() => {
        cy
        .get("[data-testid=input]")
        .invoke('val', 'error')
        
        cy.get('[data-testid=Submit]')
        .click()
        
        cy
        .get("[data-testid=textError]")
        .should('be.visible')
        .should('have.text','Indice : pour calculer facilement une réduction de 10% diviser par 10 le résultat initial ou bien d’aller\nsur le site du service publique et de faire une simulation de calcul 😊.')

        
        cy.get('[data-testid=NextStep]')
        .should('be.not.visible')
    })

    it('Good answer',() => {
        cy
        .get("[data-testid=input]")
        .type('24,3')
        
        cy.get('[data-testid=Submit]')
        .click()
        
        cy
        .get("[data-testid=succes]")
        .should('be.visible')

        cy.get('[data-testid=NextStep]')
        .should('be.visible')
        .click()

        cy.get('[data-testid=Title]')
        .should('be.visible')
    })
});