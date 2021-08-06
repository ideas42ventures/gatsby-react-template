describe("Home page", () => {
  describe("template app", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("says hello world", () => {
      cy.get("#hello").should("be.visible");
    });
  });
});
