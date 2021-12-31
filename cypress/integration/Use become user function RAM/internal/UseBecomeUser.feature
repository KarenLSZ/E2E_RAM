Feature: Become user to RAM

    Access to RAM and use the become user function  

    Scenario: Use Become user in RAM
        Given I am logged in RAM
        Then I see home page RAM
        And I go to Become user option
        And I add the user id 
        And I click in the become user button 
       

        
        