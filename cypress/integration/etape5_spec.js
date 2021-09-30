/* eslint-disable no-undef */
describe('Etapes 5:', function() {
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

        cy
        .get("[data-testid=input]")
        .type('escape yourself')
        
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
        .should('have.text', 'Extra pour 221 b')
    })

    it('Test p1',() => {
        cy.get('[data-testid=p1]')
        .should('be.visible')
        .should('have.text', `Afin de me perfectionner j’ai choisi de participer à une formation à l’afpa de tours nord en tant\nqu’animateur en tourisme et loisir. Et c’est par ce biais que j’ai découvert l’univers de l’escape game\nj’ai donc procédé à un stage de 3 mois en entreprise, stage qui à été rémunéré au vus du travail que\nj’ai fourni durant une période de forte affluence.`)
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
        
        cy
        .get("[data-testid=textError]")
        .should('be.visible')
    })

    it('Good answer',() => {
        cy
        .get("[data-testid=input]")
        .type('merci')
        
        cy.get('[data-testid=Submit]')
        .click()
        
        cy
        .get("[data-testid=succes]")
        .should('be.visible')

        cy.get('[data-testid=NextStep]')
        .should('be.visible')
        .click()

        cy.get('[data-testid=Etape3Title]')
        .should('be.visible')
        .should('have.text','Un grand merci a vous !')
    })
});