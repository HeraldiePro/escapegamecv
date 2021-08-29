/* eslint-disable no-undef */
describe('Etapes 2:', function() {
    beforeEach(function() {
        cy.visit('/enigmes');
        
        cy.get("[data-testid=input]")
        .type('24,3')
            
        cy.get('[data-testid=Submit]')
        .click()

        cy.get('[data-testid=NextStep]')
        .should('be.visible')
        .click()
    });

    it('Test title Etape2',() => {
        cy.get('[data-testid=Title]')
        .should('be.visible')
        .should('have.text', 'Animation enfant')
    })

    it('Test p1 Etape2',() => {
        cy.get('[data-testid=p1]')
        .should('be.visible')
        .should('have.text', `Suite à une reconversion professionnel je décidâmes ensuite de m’orienter vers l’animation jeune\npublic, pour ce faire j’ai fait le parcours classique du BAFA et direct après son acquisition j’ai pu\ncommencer à travailler pour une association pour les temps de périscolaire. J’avais d’ailleurs déjà à\ncœur de masteriser et d’initier mon public à différents jeux de société et/ou de stratégie.`)
    })

    it('Test h2 Etape2',() => {
        cy.get('[data-testid=h2]')
        .should('be.visible')
        .should('have.text', "L'énigme est donc la suivante")
    })

    it('Test enoncer Etape2',() => {
        cy.get('[data-testid=enoncer]')
        .should('be.visible')
        .should('have.text', 'Décrifrer le rébu suivant : Ajouter liste des images ')
    })

    it('Test ContentCard Etape2',() => {
        cy.get('[data-testid=ContentCard]')
        .should('be.visible')
    })

    it('Test inputEtape1 Etape2',() => {
        cy.get('[data-testid=input]')
        .should('be.visible')
    })
    
    it('Test SubmitEtape1 Etape2',() => {
        cy.get('[data-testid=Submit]')
        .should('be.visible')
    })

    it('Test NextStep Etape2',() => {
        cy.get('[data-testid=NextStep]')
        .should('be.not.visible')
    })

    it('False answer Etape2',() => {
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
        
        cy
        .get("[data-testid=textError]")
        .should('be.visible')
        .should('have.text','Indice : le personnage dessinée est russe et pour le plateau il s’agit célèbre jeux de stratégie coréen. 😊.')
    })

    it('Good answer Etape2',() => {
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

        cy.get('[data-testid=Title]')
        .should('be.visible')
        .should('have.text','Animation village vacances')
    })
})