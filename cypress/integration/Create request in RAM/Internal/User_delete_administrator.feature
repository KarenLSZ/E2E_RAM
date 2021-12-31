Feature: Request User delete administrator to RAM

    Access to RAM and create User delete administrator request   

    Scenario: Create User delete administrator request in RAM
        Given I am logged in RAM
        Then I see home page RAM
        And I go to My request option
        And I go to Create requests sub option
        And I select User delete administrator application role
        And I add the justification 
        And I click submit the request
       

        
        