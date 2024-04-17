describe('AIS login', () => {
  beforeEach(() => {
    cy.visit('ais2.ukf.sk/')
  })

  it('Test či má študent vytvorený zápisný list na daný rok.',  () =>{
    cy.get("#login").type("308515")
    cy.get("#heslo").type("0102022745")
    cy.get("#login-form-submit-btn").click()
    cy.get("app-studium-item").should("exist").contains("2023/2024")
  })


  it('Test case či študent dokáže otvoriť rozvrh.',  () =>{
    cy.get("#login").type("308515")
    cy.get("#heslo").type("0102022745")
    cy.get("#login-form-submit-btn").click()
    cy.get("  app-rozvrh > .card > .card-header > .mdc-fab > .mat-mdc-button-touch-target").click()
  })


 it('Test case či tudent dokáže otvoriť rozvrh a pozrieť si podrobnosti predmetu.',  () =>{
    cy.get("#login").type("308515")
    cy.get("#heslo").type("0102022745")
    cy.get("#login-form-submit-btn").click()
    cy.get("  app-rozvrh > .card > .card-header > .mdc-fab > .mat-mdc-button-touch-target").click()
    cy.get(":nth-child(3) > .rozvrh-okienko").click()
    cy.get(".mat-mdc-dialog-content > .row").should("exist")
  })

  it('Test case či študent dokáže vyhľadávať predmety.',  () =>{
    cy.get("#login").type("308515")
    cy.get("#heslo").type("0102022745")
    cy.get("#login-form-submit-btn").click()
    cy.get("  app-rozvrh > .card > .card-header > .mdc-fab > .mat-mdc-button-touch-target").click()
    cy.get('  [ng-reflect-message="Vyhľadávanie"] > .mat-icon').click()
    cy.get(".mat-mdc-form-field-infix").type("Testovanie")
    cy.get(".mat-mdc-form-field-icon-prefix").click()
  })
})