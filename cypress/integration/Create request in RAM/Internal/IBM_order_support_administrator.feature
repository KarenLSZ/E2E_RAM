Feature: Request IBM order support administrator to RAM

    Access to RAM and create IBM order support administrator request   

    Scenario: Create IBM order support administrator request in RAM
        Given I am logged in RAM
        Then I see home page RAM
        And I go to My request option
        And I go to Create requests sub option
        And I select IBM order support administrator application role
        And I close the alert
        And I select IBM internal type
        And I select all country role
        And I add the justification 
        And I click submit the request
       

        
        