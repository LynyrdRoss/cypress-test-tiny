/// <reference types="cypress" />

it("shows no cy.state warning", function () {
  cy.visit("index.html");

  cy.get(".fruit-list").contains("Bananas");
  cy.get(".name-list").contains("Sarah");
});

it("shows cy.state warning in console log", function () {
  cy.visit("index.html");

  cy.xpath('//ul[@class="fruit-list"]/li[contains(text(), "Bananas")]');
  cy.xpath('//ul[@class="name-list"]/li[contains(text(), "Sarah")]');
});
