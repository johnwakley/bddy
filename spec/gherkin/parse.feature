Feature: Parse specification
  In order to provide a consistent way of working with specifications
  I want to parse specific specification types into a generic format


  Scenario: Parse correctly formatted specification
    Given I have selected a correctly formatted <specification type>
    When I invoke the parse command
    Then I should see the following output:
    """

    """

    Examples:
    | specification type    |
    | gherkin feature file  |


  Scenario: Parse incorrectly formatted specification
    Given I have selected an incorrectly formatted <specification type>
    When I invoke the parse command
    Then I should see and error message

    Examples:
    | specification type    |
    | gherkin feature file  |
