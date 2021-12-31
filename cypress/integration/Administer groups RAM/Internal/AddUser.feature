Feature: Add user of group to RAM

    Access to RAM and add user in group

    Scenario: Add user group in RAM
        Given I am logged in RAM
        Then I see home page RAM
        And I go to Administer groups option
        Then I select the group name option 
        And I add BMW in the input 
        And I click search button 
        And I click to open the link
        Then I go to Member tab
        And I click to add member button
        And I select the IBM intranet ID option
        And I add the IBM intranet ID user in the input
        And I click search button
        And I click add button  
    