@feature-tag
Feature: Sample Feature
  In order to <impact>
  As an <actor>
  I want to <what>

  Background:
    Given some background

  @foo @bar
  Scenario: Scenario One
  This is a scenario description
    Given context
    When action
    Then result
    """
    This is a doc string
    """

  @baz
  Scenario Outline: Scenario Two
    Given <one>
    When <two>
    Then <three>

    Examples:
      | one | two  | three |
      | un  | deux | trois |
      | uno | dos  | tres  |