Feature: Command Line Interface
  In order to parse a variety of specification types from the command line
  I want the ability to define the type, source and destination of specifications to parse

  Scenario: Invoke command with arguments
    Given I am on the command line
    When I invoke the <parse-commnd> on <source-location> and <destination-location>
    Then I should see the following <result>

    Examples: Valid arguments
    | parse-command | source-location | destination-location | result
    | gherkin-parser | ~/feature-files | ~/feature-files/reports | "Report saved to ~/feature-files/reports"
    | gherkin-parser | ~/feature-files | NIL | Report should be displayed on terminal screen

    Examples: Invalid arguments
    | parse-command | source-location | destination-location | result
    | NIL | NIL | NIL | "Parser type required"
    | gherkin-parser | NIL | NIL | "Source location required"
    | INVALID-PARSER | ~/feature-files | ~/feature-files/reports | "INVALID-PARSER not detected"
    | gherkin-parser | INVALID-SOURCE-LOCATION | ~/feature-files/reports | "Source: INVALID-SOURCE-LOCATION, does not exist"
    | gherkin-parser | ~/feature-files | INVALID-DESTINATION-LOCATION | "Destination: INVALID-DESTINATION-LOCATION, does not exist"
