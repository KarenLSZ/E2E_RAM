Feature: Remove user of group to RAM

    Access to RAM and remove user in group

    Scenario: Remove user group in RAM
        Given I am logged in RAM
        Then I see home page RAM
        And I go to Administer groups option
        Then I select the group name option 
        And I add BMW in the input 
        And I click search button 
        And I click to open the link
        Then I go to Member tab
        And I select the user
        And I click delete select member button 
        And I add the reason to remove the user
        And I click delete button 