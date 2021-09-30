/* eslint-disable no-undef */
describe('Etapes 3:', function() {
    beforeEach(function() {
        cy.visit('/enigmes');
        
        cy.get("[data-testid=input]")
        .type('24,3')
            
        cy.get('[data-testid=Submit]')
        .click()

        cy.get('[data-testid=NextStep]')
        .should('be.visible')
        .click()

        cy
        .get("[data-testid=input]")
        .type('pédagogie')
        
        cy.get('[data-testid=Submit]')
        .click()
        
        cy
        .get("[data-testid=succes]")
        .should('be.visible')

        cy.get('[data-testid=NextStep]')
        .should('be.visible')
        .click()
    });

    it('Test title',() => {
        cy.get('[data-testid=Title]')
        .should('be.visible')
        .should('have.text', 'Animation village vacances')
    })

    it('Test p1',() => {
        cy.get('[data-testid=p1]')
        .should('be.visible')
        .should('have.text', `De fil en aiguille j’ai souhaité expérimenter d’animer des public dans des structures différentes avec\ndes public plus varié, j’ai donc eu la chance de travailler en saison pour un village vacance 4 étoile\nsitué sur la côte d’azur du nom très rigolo de TourisTra.Au cours de cette expérience j’ai eu l’occasion de mettre à profit mes compétences en théâtre en\nmontant sur scène (et parfois même de faire du travestie hihi) d’apprendre des rudiments de\nprestidigitation, d’improviser un jeu de piste avec pour élément principal une bobine de laine et aussi\nd’apprendre des chorégraphie (pour mon plus grand plaisir) pour des animations avec les enfants qui\navait lieu 5 jours sur 7 (le principe de mini si vous connaissez).`)
    })

    it('Test h2',() => {
        cy.get('[data-testid=h2]')
        .should('be.visible')
        .should('have.text', "L'énigme est donc la suivante")
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
        

        cy.get('[data-testid=NextStep]')
        .should('be.not.visible')

        cy.get('[data-testid=Submit]')
        .click()
        
        cy.get('[data-testid=Submit]')
        .click()
        
        cy.get('[data-testid=Submit]')
        .click()
        
    })

    it('Good answer',() => {
        cy
        .get("[data-testid=input]")
        .type('sport')
        
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
        .should('have.text','Formation ATL et stage en escape game')
    })
})