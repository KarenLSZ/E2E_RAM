Feature: Request IBM user support to RAM

    Access to RAM and create IBM user support request   

    Scenario: Create IBM user support request in RAM
        Given I am logged in RAM
        Then I see home page RAM
        And I go to My request option
        And I go to Create requests sub option
        And I select IBM user support application role
        And I select all country role
        And I add the justification 
        And I click submit the request
       

        
        