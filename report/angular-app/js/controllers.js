'use strict';

/* Controllers */

var bddyApp = angular.module('bddyApp', []);

bddyApp.controller('GherkinFeaturesController', function($scope) {

  $scope.features =

      [
        {
          "name": "Command-line Interface",
          "description": "In order to parse a variety of specification types from the command line\n  I want the ability to define the type, source and destination of specifications to parse",
          "tags": [],
          "background": "",
          "scenarios": [
            {
              "name": "Invoke command with arguments",
              "description": "",
              "tags": [],
              "steps": [
                "Given I am on the command line",
                "When I invoke the <parse-commnd> on <source-location> and <destination-location>",
                "Then I should see the following <result>"
              ],
              "examples": [
                {
                  "name": "Valid arguments",
                  "tableHeader": [
                    "parse-command",
                    "source-location",
                    "destination-location"
                  ],
                  "tableBody": [
                    [
                      "gherkin-parser",
                      "~/feature-files",
                      "~/feature-files/reports"
                    ],
                    [
                      "gherkin-parser",
                      "~/feature-files",
                      "NIL"
                    ]
                  ]
                },
                {
                  "name": "Invalid arguments",
                  "tableHeader": [
                    "parse-command",
                    "source-location",
                    "destination-location"
                  ],
                  "tableBody": [
                    [
                      "NIL",
                      "NIL",
                      "NIL"
                    ],
                    [
                      "gherkin-parser",
                      "NIL",
                      "NIL"
                    ],
                    [
                      "INVALID-PARSER",
                      "~/feature-files",
                      "~/feature-files/reports"
                    ],
                    [
                      "gherkin-parser",
                      "INVALID-SOURCE-LOCATION",
                      "~/feature-files/reports"
                    ],
                    [
                      "gherkin-parser",
                      "~/feature-files",
                      "INVALID-DESTINATION-LOCATION"
                    ]
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Sample Feature",
          "description": "In order to <impact>\n  As an <actor>\n  I want to <what>",
          "tags": [
            "@feature-tag"
          ],
          "background": {
            "name": "Feature Background",
            "steps": [
              "Given some background"
            ]
          },
          "scenarios": [
            {
              "name": "Scenario One",
              "description": "This is a scenario description",
              "tags": [
                "@foo",
                "@bar"
              ],
              "steps": [
                "Given context",
                "When action",
                "Then result"
              ],
              "examples": []
            },
            {
              "name": "Scenario Two",
              "description": "",
              "tags": [
                "@baz"
              ],
              "steps": [
                "Given <one>",
                "When <two>",
                "Then <three>"
              ],
              "examples": [
                {
                  "name": "",
                  "tableHeader": [
                    "one",
                    "two",
                    "three"
                  ],
                  "tableBody": [
                    [
                      "un",
                      "deux",
                      "trois"
                    ],
                    [
                      "uno",
                      "dos",
                      "tres"
                    ]
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Parse specification",
          "description": "In order to provide a consistent way of working with specifications\n  I want to parse specific specification types into a generic format",
          "tags": [],
          "background": "",
          "scenarios": [
            {
              "name": "Parse a correctly formatted specification",
              "description": "",
              "tags": [],
              "steps": [
                "Given I have selected a correctly formatted <specification type>",
                "When I invoke the parse command",
                "Then I should see the following output:"
              ],
              "examples": [
                {
                  "name": "",
                  "tableHeader": [
                    "specification type"
                  ],
                  "tableBody": [
                    [
                      "gherkin feature file"
                    ]
                  ]
                }
              ]
            },
            {
              "name": "Parse an incorrectly formatted specification",
              "description": "",
              "tags": [],
              "steps": [
                "Given I have selected an incorrectly formatted <specification type>",
                "When I invoke the parse command",
                "Then I should see and error message"
              ],
              "examples": [
                {
                  "name": "",
                  "tableHeader": [
                    "specification type"
                  ],
                  "tableBody": [
                    [
                      "gherkin feature file"
                    ]
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Read specification",
          "description": "In order to prepare a specification for parsing\n  I want to read a specification from a variety of sources",
          "tags": [],
          "background": "",
          "scenarios": [
            {
              "name": "Read a specification from an existing file",
              "description": "",
              "tags": [],
              "steps": [
                "Given I have a specification file that exists",
                "When I provide the path for the file",
                "Then The file contents will be read into memory"
              ],
              "examples": []
            },
            {
              "name": "Attempt to read a specification from a nonexistent file",
              "description": "",
              "tags": [],
              "steps": [
                "When I provide a path for a nonexistent file",
                "Then I should get an error"
              ],
              "examples": []
            },
            {
              "name": "Recursively list all files matching a specification type from a valid directory",
              "description": "",
              "tags": [],
              "steps": [
                "Given I have a directory structure containing files",
                "When I provide the directory path and a file type",
                "Then List files matching the file type from the directory onwards"
              ],
              "examples": []
            },
            {
              "name": "Attempt to recursively list all files matching a specification type from a nonexistent directory",
              "description": "",
              "tags": [],
              "steps": [
                "Given I provide a nonexistent directory path and a file type",
                "Then I should get an error"
              ],
              "examples": []
            }
          ]
        }
      ]


});
