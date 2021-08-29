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

    it('Test enoncer',() => {
        cy.get('[data-testid=enoncer]')
        .should('be.visible')
        .should('have.text', `« Le hall d'entrée du château était si grand que la maison des Dursley aurait pu y tenir toute\nentière et le plafond si haut qu'on arrivait pas à l'apercevoir. Des torches enflammées étaient\nfixées aux murs de pierre, comme à Gringotts, et un somptueux escalier de marbre\npermettait de monter dans les étages. Guidés par le professeur McGonagall, ils traversèrent\nl'immense salle au sol dallé et entrèrent dans une petite salle réservée aux élèves de\npremière année. Harry entendait la rumeur de centaines de voix qui lui parvenaient à travers\nune porte située sur sa droite. Les autres élèves devaient déjà être là. L'exiguïté des lieux les\nobligea à se serrer les uns contre les autres et ils restèrent debout en silence, lançant autour\nd'eux des regards un peu inquiets. »`)
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
        .should('have.text','Indice : il s’agit de coordonnées dans le texte afin de trouver un mot en 5 lettre.  😊.')
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