Feature: Search Functionality
  @tag
  Scenario: Search the dealers of the cars

    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click ‘Find a Dealer’ link
    Then I see the dealer lists


      | 3 Point Motors Kew        |
      | A Cullen & Son            |
      | A2Z Cars                  |
      | Adelaide BMW              |
      | Alex Holland Classic Cars |
      | Bega Valley Motors        |








