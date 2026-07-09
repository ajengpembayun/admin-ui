describe("Dashboard Overview", () => {
    it("User berhasil login dan masuk ke halaman dashboard", () => {
      cy.visit("http://localhost:5173/login");
  
      // Login
      cy.get('input[type="email"]').type("hello@example.com");
      cy.get('input[type="password"]').type("12345678");
  
      cy.contains("Login").click();
  
      // Berhasil ke dashboard
      cy.url().should("include", "/");
  
      // Komponen dashboard muncul
      cy.contains("Total Balance").should("be.visible");
      cy.contains("Goals").should("be.visible");
      cy.contains("Upcoming Bill").should("be.visible");
      cy.contains("Recent Transactions").should("be.visible");
      cy.contains("Statistics").should("be.visible");
      cy.contains("Expenses Breakdown").should("be.visible");
    });
  });