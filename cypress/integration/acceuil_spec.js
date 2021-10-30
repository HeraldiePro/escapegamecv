import { AcceuilText } from '../../src/theme/TextElement';

/* eslint-disable no-undef */
describe('Acceuil:', function() {
    beforeEach(function() {
        cy.visit('/');
    });
    it('Test container acceil exist',() => {
        cy.get('[data-testid=ContentAcceuil]')
        .should('be.visible')
        .should('have.class', 'content-acceuil')
        .should('have.css','background-image','linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("http://localhost:3000/static/media/aceuilremerciment.31d38322.jpg")')
    })

    it('Test container acceil exist and have good style and text',() => {
        cy.get('[data-testid=TitleAcceuil]')
        .should('be.visible')
        .should('have.css', 'color' , 'rgb(255, 255, 255)')
    })

    it('Test container description exist and have good style and text',() => {
        cy.get('[data-testid=ParagraphAcceuil]')
        .should('be.visible')
        .should('have.css', 'color' , 'rgb(255, 255, 255)')
    })

    it('Test container button exist and have good style and text',() => {
        cy.get('[data-testid=ButonAcceuil]')
        .should('be.visible')

        cy.get('.makeStyles-buttonTitle-2')
        .should('have.css','background-image','linear-gradient(45deg, rgb(230, 128, 8) 30%, rgb(176, 122, 111) 90%)')
    })

    it('Test click button',() => {
        cy.get('[data-testid=ButonAcceuil]')
        .click()
        
        cy.get('[data-testid=ContentStepper]')
        .should('be.visible')
    })
});