Feature: Request Customer number event subscriber to RAM

    Access to RAM and create Customer number event subscriber request   

    Scenario: Create Customer number event subscriber request in RAM
        Given I am logged in RAM
        Then I see home page RAM
        And I go to My request option
        And I go to Create requests sub option
        And I select Customer number event subscriber application role
        And I select IBM internal type
        And I select all country role
        And I add the justification 
        And I click submit the request
       

        
        