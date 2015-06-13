Feature: Read specification
  In order to prepare a specification for parsing
  I want to read a specification from a variety of sources

  Scenario: Read a specification from an existing file
    Given I have a specification file that exists
    When I provide the path for the file
    Then The file contents will be read into memory

  Scenario: Attempt to read a specification from a non-existing file
    When I provide a path for a non-existing file
    Then I should see an error message

  Scenario: Recursively read all specification files from a starting directory
    Given I have a directory structure containing specification files
    When I provide a starting directory path
    Then All specification files at every level from the start directory should be read into memory