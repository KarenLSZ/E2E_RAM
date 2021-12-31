Feature: Request IBM order support to RAM

    Access to RAM and create IBM order support request   

    Scenario: Create IBM order support request in RAM
        Given I am logged in RAM
        Then I see home page RAM
        And I go to My request option
        And I go to Create requests sub option
        And I select IBM order support application role
        And I select IBM internal type
        And I select all country role
        And I add the justification 
        And I click submit the request
       

        
        