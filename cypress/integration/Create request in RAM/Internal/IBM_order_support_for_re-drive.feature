Feature: Request IBM order support for re-drive to RAM

    Access to RAM and create IBM order support for re-drive request   

    Scenario: Create IBM order support for re-drive request in RAM
        Given I am logged in RAM
        Then I see home page RAM
        And I go to My request option
        And I go to Create requests sub option
        And I select IBM order support for re-drive application role
        And I select IBM internal type
        And I select all country role
        And I add the justification 
        And I click submit the request
       

        
        