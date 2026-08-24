Feature: PIM Page functionality

  Scenario: Verify Add Employee functionality

    Given log in to the application
    Then verify Welcome selenium

    When move the mouse to the PIM
    And click on the Add Employee button
    And switch to the iframe

    Then verify add Employee
    And enter the first name "Hanu" into the first name field
    And enter the last name "DSU" into the last name field
    And click the Save button to add the new employee


    When click the Edit button
    When click on again save button
    And click the Back button to return to the previous page

    And select the dropdown value
    And enter employee first name in search field
    And click the search button

    Then verify Employee