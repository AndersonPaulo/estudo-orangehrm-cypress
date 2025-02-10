class dashboardPage {

    selectorsList(){
        const selector = {

            
            dashboardGrid:".orangehrm-dashboard-grid",    
           

        }
        return selector
    }
    checkDashboard(){

        cy.location('pathname').should('equal','/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid)
        
        
    }
    
}

export default dashboardPage