Feature: Read specification
  In order to prepare a specification for parsing
  I want to read a specification from a variety of sources

  Scenario: Read a specification from an existing file
    Given I have a specification file that exists
    When I provide the path for the file
    Then The file contents will be read into memory

  Scenario: Attempt to read a specification from a nonexistent file
    When I provide a path for a nonexistent file
    Then I should get an error

  Scenario: Recursively list all files matching a specification type from a valid directory
    Given I have a directory structure containing files
    When I provide the directory path and a file type
    Then List files matching the file type from the directory onwards

  Scenario: Attempt to recursively list all files matching a specification type from a nonexistent directory
    Given I provide a nonexistent directory path and a file type
    Then I should get an error