Feature: Request IBM notice administrator to RAM

    Access to RAM and create IBM notice administrator request   

    Scenario: Create IBM notice administrator request in RAM
        Given I am logged in RAM
        Then I see home page RAM
        And I go to My request option
        And I go to Create requests sub option
        And I select IBM notice administrator application role
        And I add the justification 
        And I click submit the request
       

        
        