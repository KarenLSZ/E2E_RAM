Feature: Request IBM group manager to RAM

    Access to RAM and create IBM group manager request   

    Scenario: Create IBM group manager request in RAM
        Given I am logged in RAM
        Then I see home page RAM
        And I go to My request option
        And I go to Create requests sub option
        And I select IBM group manager application role
        And I select the first group
        And I add the justification 
        And I click submit the request
       

        
        