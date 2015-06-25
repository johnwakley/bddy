'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  // $scope.phones = [
  //   {'name': 'Nexus S',
  //    'snippet': 'Fast just got faster with Nexus S.'},
  //   {'name': 'Motorola XOOM™ with Wi-Fi',
  //    'snippet': 'The Next, Next Generation tablet.'},
  //   {'name': 'MOTOROLA XOOM™',
  //    'snippet': 'The Next, Next Generation tablet.'}
  // ];


  $scope.features =


[
  {
    "name": "view last 5 transactions",
    "description": "",
    "tags": [],
    "background": "",
    "scenarios": [
      {
        "name": "last 5 transactions",
        "description": "",
        "tags": [
          "@not-ready"
        ],
        "steps": [
          "Given I am on the landing screen account section",
          "Then I can see my last 5 transaction"
        ],
        "examples": []
      },
      {
        "name": "cache last transactions",
        "description": "",
        "tags": [
          "@mobile-only",
          "@not-ready"
        ],
        "steps": [
          "Given I am on the landing screen account section",
          "When my last 5 transactions cannot be retrieved",
          "Then I see my last available 5 transactions"
        ],
        "examples": []
      },
      {
        "name": "offline",
        "description": "",
        "tags": [
          "@mobile-only",
          "@not-ready"
        ],
        "steps": [
          "Given I am on the landing screen account section",
          "When I am offline",
          "Then I see my last available 5 transactions"
        ],
        "examples": []
      },
      {
        "name": "server error",
        "description": "",
        "tags": [
          "@web-only",
          "@not-ready"
        ],
        "steps": [
          "Given I am on the landing screen account section",
          "When my last 5 transactions cannot be retrieved",
          "Then I see an error indicator"
        ],
        "examples": []
      },
      {
        "name": "indication of how to see my full statement",
        "description": "",
        "tags": [
          "@not-ready"
        ],
        "steps": [
          "Given I am on the landing screen account section",
          "Then I can see an indicator telling me how to see my full statement"
        ],
        "examples": []
      },
      {
        "name": "reveal all offers",
        "description": "",
        "tags": [
          "@not-ready"
        ],
        "steps": [
          "Given I am on the landing screen account section",
          "When I want to see all my offers",
          "Then I can see all my offers"
        ],
        "examples": []
      },
      {
        "name": "transaction types",
        "description": "",
        "tags": [
          "@not-ready"
        ],
        "steps": [
          "Given I am on the landing screen account section",
          "And I can see my last 5 transactions",
          "Then I should see <date>, <transaction type>, <description>, <points> and <sponsor name> for each transaction"
        ],
        "examples": [
          {
            "name": "transaction types",
            "tableHeader": [
              "date",
              "transaction type",
              "description",
              "points",
              "sponsor name"
            ],
            "tableBody": [
              [
                "6th Jan 2015",
                "TP",
                "collect",
                "250 pts",
                "Sainsbury’s"
              ],
              [
                "7th Feb 2015",
                "RD",
                "spend",
                "£5",
                "Pizza Express"
              ],
              [
                "8th Mar 2015",
                "RD",
                "refund",
                "30 pts",
                "eBay"
              ],
              [
                "9th Apr 2015",
                "BN",
                "nectar bonus",
                "500 pts",
                "Nectar"
              ],
              [
                "10th Jun 2015",
                "SB",
                "sponsor bonus",
                "500 pts",
                "TBC"
              ],
              [
                "11th Jul 2015",
                "GW",
                "good will",
                "250 pts",
                "TBC"
              ],
              [
                "12th Aug 2015",
                "ET",
                "external transfer",
                "150 pts",
                "TBC"
              ],
              [
                "13th Sept 2015",
                "TI",
                "inbound transfer",
                "100 pts",
                "TBC"
              ],
              [
                "14th Nov 2015",
                "TO",
                "outbound transfer",
                "250 pts",
                ""
              ]
            ]
          }
        ]
      },
      {
        "name": "indication that points take time to settle",
        "description": "",
        "tags": [
          "@not-ready"
        ],
        "steps": [
          "Given I am on the landing screen account section",
          "When I have some tranasctions",
          "Then I can see an indicator telling me that points may take some time to settle"
        ],
        "examples": []
      },
      {
        "name": "responsiveness of offers",
        "description": "",
        "tags": [
          "@web-only",
          "@not-ready"
        ],
        "steps": [
          "Given I am on the landing screen account section",
          "When I am on a smaller screen",
          "Then offers should be rescaled to fit the width of the screen"
        ],
        "examples": []
      },
      {
        "name": "reveal account section",
        "description": "",
        "tags": [
          "@not-ready"
        ],
        "steps": [
          "Given I am on the landing screen with offers expanded",
          "When I want to see my last 5 transactions",
          "Then I can see my last 5 transactions"
        ],
        "examples": []
      },
      {
        "name": "first time error",
        "description": "",
        "tags": [
          "@mobile-only",
          "@not-ready"
        ],
        "steps": [
          "Given I am on the landing screen account section",
          "When my last 5 transactions cannot be retrieved",
          "And I have no cached tranasctions",
          "Then I should see an error indicator"
        ],
        "examples": []
      },
      {
        "name": "no transactions",
        "description": "",
        "tags": [
          "@not-ready"
        ],
        "steps": [
          "Given I am on the landing screen account section",
          "And I have no transactions",
          "Then I should see a no tranasctions indicator"
        ],
        "examples": []
      }
    ]
  },
  {
    "name": "launch to default login or registration",
    "description": "",
    "tags": [],
    "background": "",
    "scenarios": [
      {
        "name": "already registered and have a card",
        "description": "",
        "tags": [
          "@launch",
          "@sanity"
        ],
        "steps": [
          "Given I am on the launch screen",
          "When I have a card",
          "Then I should be taken to the login screen"
        ],
        "examples": []
      },
      {
        "name": "register now",
        "description": "",
        "tags": [
          "@manual-only"
        ],
        "steps": [
          "Given I am on the launch screen",
          "When I want to register",
          "Then I should be taken to external browser for registration"
        ],
        "examples": []
      }
    ]
  },
  {
    "name": "logging in",
    "description": "",
    "tags": [],
    "background": "",
    "scenarios": [
      {
        "name": "successful login",
        "description": "",
        "tags": [
          "@login",
          "@sanity",
          "@android-only"
        ],
        "steps": [
          "Given I am on the login screen",
          "When I submit correct login details",
          "Then I should be logged in and taken to the next screen",
          "And the backend received 3 requests"
        ],
        "examples": []
      },
      {
        "name": "successful login",
        "description": "",
        "tags": [
          "@login",
          "@sanity",
          "@not-ready-android"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I am a registered user",
          "When I submit correct login details",
          "Then I should be logged in and taken to the next screen",
          "And the backend received 4 requests"
        ],
        "examples": []
      },
      {
        "name": "unsuccessful login, then successful",
        "description": "",
        "tags": [
          "@login"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I am a registered user",
          "When I submit incorrect login details",
          "Then I correct my login details and submit",
          "Then I should be logged in and taken to the next screen"
        ],
        "examples": []
      },
      {
        "name": "prevent logged in users from going back to the login screen",
        "description": "",
        "tags": [
          "@login",
          "@not-ready"
        ],
        "steps": [
          "Given I have logged in and I have been taken to another screen",
          "Then I should not be allowed to go back to the login screen"
        ],
        "examples": []
      },
      {
        "name": "cancel login",
        "description": "",
        "tags": [
          "@login",
          "@not-ready-android"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I decide to cancel the login",
          "Then I should be taken back to the launch screen"
        ],
        "examples": []
      },
      {
        "name": "card number field should have focus by default",
        "description": "",
        "tags": [
          "@login",
          "@manual-only-android"
        ],
        "steps": [
          "Given I am on the login screen",
          "Then the card number field should have focus",
          "And the numerical keyboard should be visible"
        ],
        "examples": []
      },
      {
        "name": "submit with keyboard",
        "description": "",
        "tags": [
          "@login",
          "@not-desktop"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I have entered correct login details",
          "Then I should be able to login using the keyboard"
        ],
        "examples": []
      },
      {
        "name": "visual feedback for card correct number length",
        "description": "",
        "tags": [
          "@login"
        ],
        "steps": [
          "Given I am on the login screen",
          "When I enter an 11 digit number",
          "Then I should see a visual feedback that my card number is the correct length"
        ],
        "examples": []
      },
      {
        "name": "moving to password field",
        "description": "",
        "tags": [
          "@login"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I have entered a card number that is the correct length",
          "Then I should see the password field with focus",
          "And I should see the submit button"
        ],
        "examples": []
      },
      {
        "name": "card number field should display numerical keyboard",
        "description": "",
        "tags": [
          "@login",
          "@not-desktop",
          "@manual-only-android"
        ],
        "steps": [
          "Given I am on the login screen",
          "And the card number field is focused",
          "Then the numerical keyboard should be visible"
        ],
        "examples": []
      },
      {
        "name": "card number field accepts only numbers",
        "description": "",
        "tags": [
          "@login"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I enter a letter",
          "Then the card number field should not accept the letter"
        ],
        "examples": []
      },
      {
        "name": "password field should display alpha numerical keyboard",
        "description": "",
        "tags": [
          "@login",
          "@not-desktop",
          "@manual-only-android"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I have entered a card number that is the correct length",
          "When the password field is focused",
          "Then the alpha numerical keyboard should be visible"
        ],
        "examples": []
      },
      {
        "name": "card number field should be capped at 11 numbers",
        "description": "",
        "tags": [
          "@login"
        ],
        "steps": [
          "Given I am on the login screen",
          "Then I should not be able to enter more than 11 numbers in the card number field"
        ],
        "examples": []
      },
      {
        "name": "remove correct card number length indicator and prevent submission",
        "description": "",
        "tags": [
          "@login"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I have entered a card number that is the correct length",
          "When I remove a character from the card number field",
          "Then I should see a visual feedback that my card number is not the correct length",
          "And I should not be able to submit my details"
        ],
        "examples": []
      },
      {
        "name": "prevent form submission until required data is present",
        "description": "",
        "tags": [
          "@login"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I have entered a card number of the correct length",
          "But the password field is empty",
          "Then I should not be able to submit my details"
        ],
        "examples": []
      },
      {
        "name": "loading indicator on submit",
        "description": "",
        "tags": [
          "@login"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I am a registered user",
          "And the server is slow",
          "When I submit correct login details",
          "Then I should see a loading indicator until response has been received"
        ],
        "examples": []
      },
      {
        "name": "offline",
        "description": "",
        "tags": [
          "@login",
          "@not-web",
          "@manual-only-ios"
        ],
        "steps": [
          "Given I am on the login screen",
          "When I am offline",
          "Then I should see an offline error message"
        ],
        "examples": []
      },
      {
        "name": "connection times out",
        "description": "",
        "tags": [
          "@login"
        ],
        "steps": [
          "Given I am on the login screen",
          "And the server is very slow",
          "When I submit correct login details",
          "Then I should see a connection time out error message"
        ],
        "examples": []
      },
      {
        "name": "server side errors",
        "description": "",
        "tags": [
          "@login",
          "@not-ready-android"
        ],
        "steps": [
          "Given the server responses with <http code> and <error code>",
          "And I am on the login screen",
          "And I am a registered user",
          "When I submit correct login details",
          "Then I should see the server error message <error message>"
        ],
        "examples": [
          {
            "name": "web and mobile errors",
            "tableHeader": [
              "http code",
              "error code",
              "error message"
            ],
            "tableBody": [
              [
                "400",
                "102",
                "Sorry, that wasn't the right card number and/or password. Please check and try again."
              ],
              [
                "400",
                "108",
                "Trouble logging in? Please check your details or contact our Customer Support."
              ],
              [
                "400",
                "109",
                "Trouble logging in? Please check your details or contact our Customer Support."
              ],
              [
                "400",
                "110",
                "Sorry, that wasn't the right card number and/or password. Please check and try again."
              ],
              [
                "400",
                "111",
                "Trouble logging in? Please check your details or contact our Customer Support."
              ],
              [
                "400",
                "112",
                "Trouble logging in? Please check your details or contact our Customer Support."
              ],
              [
                "400",
                "113",
                "Trouble logging in? Please check your details or contact our Customer Support."
              ],
              [
                "400",
                "100",
                "Sorry, there was a problem. Please try again."
              ]
            ]
          }
        ]
      },
      {
        "name": "hide server error message",
        "description": "",
        "tags": [
          "@login"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I am a registered user",
          "And I see a server error message",
          "When I focus the card number text field",
          "Then the server error message should have disappeared"
        ],
        "examples": []
      },
      {
        "name": "can contact customer support via calling",
        "description": "",
        "tags": [
          "@login",
          "@not-ready-ios",
          "@manual-only-ios"
        ],
        "steps": [
          "Given the server responses with 404 and 108",
          "And I am on the login screen",
          "And I submit correct login details",
          "When I need further assistance from customer support via calling",
          "Then I am able to call a number to get help"
        ],
        "examples": []
      },
      {
        "name": "can contact customer support via email",
        "description": "",
        "tags": [
          "@login",
          "@manual-only"
        ],
        "steps": [
          "Given the server responses with 404 and 108",
          "And I am on the login screen",
          "And I submit correct login details",
          "When I need further assistance from customer support via email",
          "Then I am able to write an email directly to get help"
        ],
        "examples": []
      },
      {
        "name": "hide server error message",
        "description": "",
        "tags": [
          "@login"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I am a registered user",
          "And I see a server error message",
          "When I focus the card number text field",
          "Then the server error message should have disappeared"
        ],
        "examples": []
      },
      {
        "name": "can reset password",
        "description": "",
        "tags": [
          "@login",
          "@android-only"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I have entered a card number of the correct length",
          "Then I should be able reset my password"
        ],
        "examples": []
      },
      {
        "name": "has reset password button",
        "description": "",
        "tags": [
          "@login",
          "@ios-only"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I have entered a card number of the correct length",
          "Then I should have a possibility to reset my password"
        ],
        "examples": []
      },
      {
        "name": "can view terms and conditions",
        "description": "",
        "tags": [
          "@login"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I am a registered user",
          "When I have entered a card number that is the correct length",
          "And I choose to view terms and conditions",
          "Then I can read terms and conditions"
        ],
        "examples": []
      },
      {
        "name": "links in terms and conditions take me to browser",
        "description": "",
        "tags": [
          "@login",
          "@manual-only"
        ],
        "steps": [
          "Given I am on the login screen",
          "And I have entered a card number of the correct length",
          "When I choose to view terms and conditions",
          "And I follow a link in terms and conditions",
          "Then I am taken to the link in the browser"
        ],
        "examples": []
      }
    ]
  },
  {
    "name": "migrate paper registered users",
    "description": "",
    "tags": [],
    "background": "",
    "scenarios": [
      {
        "name": "unregistered users",
        "description": "",
        "tags": [
          "@android-only"
        ],
        "steps": [
          "Given I am on login screen",
          "When I enter my un-registered card number",
          "Then a leaving app notification dialog should appear"
        ],
        "examples": []
      },
      {
        "name": "unregistered users",
        "description": "",
        "tags": [
          "@ios-only",
          "@manual-only"
        ],
        "steps": [
          "Given I am on login screen",
          "When I enter my un-registered card number",
          "Then I should be taken to external browser for registration",
          "And nectar card number and platform information should be passed to the browser"
        ],
        "examples": []
      },
      {
        "name": "partially active users",
        "description": "",
        "tags": [
          "@android-only"
        ],
        "steps": [
          "Given I am on login screen",
          "When I enter my partially-active card number",
          "Then a leaving app notification dialog should appear"
        ],
        "examples": []
      },
      {
        "name": "partially active users",
        "description": "",
        "tags": [
          "@ios-only",
          "@manual-only"
        ],
        "steps": [
          "Given I am on login screen",
          "When I enter my partially-active card number",
          "Then I should be taken to external browser for registration",
          "And nectar card number and platform information should be passed to the browser"
        ],
        "examples": []
      },
      {
        "name": "continue to registration process",
        "description": "",
        "tags": [
          "@android-only"
        ],
        "steps": [
          "Given I am on notification dialog",
          "When I agree to continue the registration process",
          "Then I should be taken to external browser for registration",
          "And nectar card number and platform information should be passed to the browser"
        ],
        "examples": []
      },
      {
        "name": "not to continue with the registration process",
        "description": "",
        "tags": [
          "@android-only"
        ],
        "steps": [
          "Given I am on notification dialog",
          "When I disagree to continue to the registration process",
          "Then I should be taken back to login screen",
          "And the card number should be cleared"
        ],
        "examples": []
      },
      {
        "name": "starting app after completing the registration process",
        "description": "",
        "tags": [
          "@android-only"
        ],
        "steps": [
          "Given I have completed website registration process",
          "Then the app should relaunch to the login screen"
        ],
        "examples": []
      },
      {
        "name": "starting app after completing the registration process",
        "description": "",
        "tags": [
          "@ios-only",
          "@manual-only"
        ],
        "steps": [
          "Given I have completed website registration process",
          "Then the app should relaunch to the login screen",
          "And the card number should be cleared"
        ],
        "examples": []
      }
    ]
  },
  {
    "name": "offer details",
    "description": "",
    "tags": [],
    "background": "",
    "scenarios": [
      {
        "name": "show offer details with content",
        "description": "",
        "tags": [
          "@offer-details",
          "@manual-only-android"
        ],
        "steps": [
          "Given I am on the offer details screen",
          "Then I should see a title, expiry date, sponsor brand logo and a product image and collapsed T&Cs"
        ],
        "examples": []
      },
      {
        "name": "show lifestyle image when product image is not available",
        "description": "",
        "tags": [
          "@offers",
          "@not-ready",
          "@manual-only-android"
        ],
        "steps": [
          "Given I am on the offers screen",
          "And the product image is not available",
          "And the lifestyle image is available",
          "Then I should see the lifestyle image"
        ],
        "examples": []
      },
      {
        "name": "able to go back to offers",
        "description": "",
        "tags": [
          "@offer-details"
        ],
        "steps": [
          "Given I am on the offer details screen",
          "And I decide to go back to offers",
          "Then I should see a list of offers"
        ],
        "examples": []
      },
      {
        "name": "showing sub sponsors logos",
        "description": "",
        "tags": [
          "@offer-details",
          "@manual-only-android"
        ],
        "steps": [
          "Given that an offer is from a sub sponsor",
          "And I am on the offer details screen",
          "Then I should be shown the offer details sub sponsor logo, not the sponsor logo"
        ],
        "examples": []
      },
      {
        "name": "show expanded T&Cs when a financial offer",
        "description": "",
        "tags": [
          "@offer-details",
          "@ios-only"
        ],
        "steps": [
          "Given the API does return a financial offer",
          "And I am on the offer details screen",
          "Then the T&Cs should be expanded"
        ],
        "examples": []
      },
      {
        "name": "offline",
        "description": "",
        "tags": [
          "@offer-details",
          "@manual-only-ios",
          "@not-web"
        ],
        "steps": [
          "Given I am on the offer details screen",
          "When I am offer details offline",
          "Then I should see an offer details offline error message"
        ],
        "examples": []
      },
      {
        "name": "show placeholder image if the product image and lifestyle image fails to download",
        "description": "",
        "tags": [
          "@offer-details",
          "@manual-only"
        ],
        "steps": [
          "Given I am on the offers details screen",
          "And the lifestyle image fails to download",
          "And the product image fails to download",
          "Then I should see a placeholder image instead"
        ],
        "examples": []
      },
      {
        "name": "show placeholder image if API does not return a product image link and lifestyle image link",
        "description": "",
        "tags": [
          "@offer-details",
          "@manual-only"
        ],
        "steps": [
          "Given I am on the offers details screen",
          "And the API does not return a product image link",
          "And the API does not return a lifestyle image link",
          "Then I should see a placeholder image instead"
        ],
        "examples": []
      },
      {
        "name": "hide 'show how to get this offer' if not sent from server",
        "description": "",
        "tags": [
          "@offer-details",
          "@manual-only-android"
        ],
        "steps": [
          "Given the API does not return how to get this offer",
          "And I am on the offer details screen",
          "Then I should not see any information about how to get this offer"
        ],
        "examples": []
      },
      {
        "name": "show how to get this offer if sent",
        "description": "",
        "tags": [
          "@offer-details",
          "@manual-only-android"
        ],
        "steps": [
          "Given the API returns how to get this offer",
          "And I am on the offer details screen",
          "Then I should see information about how to get this offer"
        ],
        "examples": []
      }
    ]
  },
  {
    "name": "show offers",
    "description": "",
    "tags": [],
    "background": "",
    "scenarios": [
      {
        "name": "show offers",
        "description": "",
        "tags": [
          "@offers",
          "@sanity",
          "@android-only"
        ],
        "steps": [
          "Given I am on the offers screen",
          "Then I should see a list of offers",
          "And the backend received 3 requests"
        ],
        "examples": []
      },
      {
        "name": "show offers",
        "description": "",
        "tags": [
          "@offers",
          "@sanity",
          "@not-ready-android"
        ],
        "steps": [
          "Given I am on the offers screen",
          "Then I should see a list of offers",
          "And the backend received 4 requests"
        ],
        "examples": []
      },
      {
        "name": "show offers with content",
        "description": "",
        "tags": [
          "@offers",
          "@not-ready-ios"
        ],
        "steps": [
          "Given the server returns offers with lifestyle image",
          "And I am on the offers screen",
          "Then I should see a title, expiry date, cta text, sponsor brand logo and a lifestyle image for the first offer"
        ],
        "examples": []
      },
      {
        "name": "show product image when lifestyle image is not available",
        "description": "",
        "tags": [
          "@offers",
          "@not-ready",
          "@manual-only"
        ],
        "steps": [
          "Given I am on the offers screen",
          "And the lifestyle image is not available",
          "And the product image is available",
          "Then I should see the product image"
        ],
        "examples": []
      },
      {
        "name": "show offers with content",
        "description": "",
        "tags": [
          "@offers",
          "@ios-only"
        ],
        "steps": [
          "Given I am on the offers screen",
          "Then I should see a title, expiry date, sponsor brand logo and a product image for the first offer"
        ],
        "examples": []
      },
      {
        "name": "show placeholder image if the product image and lifestyle image fails to download",
        "description": "",
        "tags": [
          "@offers",
          "@manual-only"
        ],
        "steps": [
          "Given I am on the offers screen",
          "And the lifestyle image fails to download",
          "And the product image fails to download",
          "Then I should see a placeholder image instead"
        ],
        "examples": []
      },
      {
        "name": "show placeholder image if API does not return a product image link and lifestyle image link",
        "description": "",
        "tags": [
          "@offers",
          "@manual-only"
        ],
        "steps": [
          "Given I am on the offers screen",
          "And the API does not return a product image link",
          "And the API does not return a lifestyle image link",
          "Then I should see a placeholder image instead"
        ],
        "examples": []
      },
      {
        "name": "retry after server error",
        "description": "",
        "tags": [
          "@offers",
          "@not-ready-ios"
        ],
        "steps": [
          "Given the server does not return offers because of an error",
          "When I am on the login screen",
          "And I submit correct login details",
          "Then an error message will be displayed",
          "When the server does return offers again",
          "And I retry to get offers",
          "Then I should see a list of offers"
        ],
        "examples": []
      },
      {
        "name": "no retry after no offers",
        "description": "",
        "tags": [
          "@offers"
        ],
        "steps": [
          "Given the server does not return offers as I have no offers",
          "When I am on the login screen",
          "And I submit correct login details",
          "Then I should see a message explaining I have no offers",
          "And I should not be able to retry"
        ],
        "examples": []
      },
      {
        "name": "loading indicator when loading offers",
        "description": "",
        "tags": [
          "@offers",
          "@mobile-only"
        ],
        "steps": [
          "Given the server returns offers slowly",
          "And I am on the offers screen",
          "Then I should see a loading indicator"
        ],
        "examples": []
      },
      {
        "name": "showing sub sponsors logos",
        "description": "",
        "tags": [
          "@offers"
        ],
        "steps": [
          "Given that an offer is from a sub sponsor",
          "And I am on the offers screen",
          "Then I should be shown the sub sponsor logo, not the sponsor logo"
        ],
        "examples": []
      },
      {
        "name": "show offer details",
        "description": "",
        "tags": [
          "@offers",
          "@not-ready-ios"
        ],
        "steps": [
          "Given I am on the offers screen",
          "When I decide to see the offer details",
          "Then I should see the offer details"
        ],
        "examples": []
      },
      {
        "name": "offers with missing expiry date",
        "description": "",
        "tags": [
          "@offers",
          "@not-ready-ios"
        ],
        "steps": [
          "Given the server returns an offer with no expiry date",
          "And I am on the offers screen",
          "Then I should see an offer with no expiry date"
        ],
        "examples": []
      },
      {
        "name": "offers with empty expiry date",
        "description": "",
        "tags": [
          "@offers",
          "@not-ready-ios"
        ],
        "steps": [
          "Given the server returns an offer with an empty expiry date",
          "And I am on the offers screen",
          "Then I should see an offer with no expiry date"
        ],
        "examples": []
      }
    ]
  },
  {
    "name": "Opt in to an offer",
    "description": "",
    "tags": [],
    "background": "",
    "scenarios": [
      {
        "name": "show correct types of opt-ins",
        "description": "",
        "tags": [
          "@offers-opt-in"
        ],
        "steps": [
          "Given the server returns the call to action <optin type>",
          "And I am on the offer details screen",
          "Then I should see a <button label> opt-in button"
        ],
        "examples": [
          {
            "name": "opt-in types",
            "tableHeader": [
              "optin type",
              "button label"
            ],
            "tableBody": [
              [
                "OPT-IN",
                "Load to card"
              ],
              [
                "VISIT WEBSITE",
                "Visit website"
              ],
              [
                "CALL",
                "Call now"
              ]
            ]
          }
        ]
      },
      {
        "name": "able to opt in",
        "description": "",
        "tags": [
          "@offers-opt-in"
        ],
        "steps": [
          "Given the server returns the call to action OPT-IN",
          "And I am on the offer details screen",
          "When I opt in",
          "Then I can see feedback that the opt in has been successful"
        ],
        "examples": []
      },
      {
        "name": "not able to opt in due to server issue",
        "description": "",
        "tags": [
          "@offers-opt-in"
        ],
        "steps": [
          "Given the server is not able to accept offer opt in",
          "And I am on the offer details screen",
          "When I opt in",
          "Then I can see feedback that the opt in has been successful",
          "But after a while I should see feedback that the opt in failed"
        ],
        "examples": []
      },
      {
        "name": "already opted in offer after loading offer details",
        "description": "",
        "tags": [
          "@offers-opt-in"
        ],
        "steps": [
          "Given the server returns the call to action OPT-IN",
          "And the server is unable to opt the collector in to as they are already opted in",
          "When I am on the offer details screen",
          "And I opt in",
          "Then I can see feedback that the opt in has been successful",
          "And after a while I should see feedback that the opt in is still valid"
        ],
        "examples": []
      },
      {
        "name": "connection times out",
        "description": "",
        "tags": [
          "@offers-opt-in"
        ],
        "steps": [
          "Given the server is very slow when opting in",
          "And I am on the offer details screen",
          "When I opt in",
          "Then I can see feedback that the opt in has been successful",
          "But after a long while I should see feedback that the opt in failed"
        ],
        "examples": []
      },
      {
        "name": "not able to opt out",
        "description": "",
        "tags": [
          "@offers-opt-in"
        ],
        "steps": [
          "Given the offer is opted in",
          "And I am on the offer details screen",
          "Then I should not be able to opt out"
        ],
        "examples": []
      },
      {
        "name": "show that I already opted in",
        "description": "",
        "tags": [
          "@offers-opt-in"
        ],
        "steps": [
          "Given the offer is opted in",
          "And I am on the offer details screen",
          "Then I can see feedback that the opt in has been successful"
        ],
        "examples": []
      },
      {
        "name": "show that I opted in after going back to offer list and then to the offer again",
        "description": "",
        "tags": [
          "@offers-opt-in",
          "@android-only"
        ],
        "steps": [
          "Given the server will accept the opt-in",
          "And I am on the offer details screen",
          "And I opt in",
          "And I decide to go back to offers",
          "And I decide to see the offer details",
          "Then I can see feedback that the opt in has been successful",
          "And the backend received 5 requests"
        ],
        "examples": []
      },
      {
        "name": "show that I opted in after going back to offer list and then to the offer again",
        "description": "",
        "tags": [
          "@offers-opt-in",
          "@ios-only"
        ],
        "steps": [
          "Given the server will accept the opt-in",
          "And I am on the offer details screen",
          "When I opt in",
          "And the offer is opted in",
          "And I decide to go back to offers",
          "When I decide to see the offer details",
          "Then I can see feedback that the opt in has been successful",
          "And the backend received 7 requests"
        ],
        "examples": []
      },
      {
        "name": "not able to opt in when offline",
        "description": "",
        "tags": [
          "@offers-opt-in",
          "@mobile-only",
          "@manual-only-ios"
        ],
        "steps": [
          "Given the server returns the call to action OPT-IN",
          "And I am on the offer details screen",
          "And I am offer details offline",
          "Then I should not be able to opt in",
          "Then I should see an offer details offline error message"
        ],
        "examples": []
      },
      {
        "name": "able to call",
        "description": "",
        "tags": [
          "@offers-opt-in",
          "@manual-only-ios"
        ],
        "steps": [
          "Given the server returns the call to action CALL",
          "And I am on the offer details screen",
          "When I call the number to opt in",
          "Then I can see information describing which number will be called",
          "And the backend received 4 requests"
        ],
        "examples": []
      },
      {
        "name": "not able to call due to invalid phone number",
        "description": "",
        "tags": [
          "@offers-opt-in"
        ],
        "steps": [
          "Given the server returns an invalid number for the call to action CALL",
          "And I am on the offer details screen",
          "When I call the number to opt in",
          "Then I can see an error message because number can not be called"
        ],
        "examples": []
      },
      {
        "name": "able to open offer opt-in website",
        "description": "",
        "tags": [
          "@offers-opt-in",
          "@manual-only"
        ],
        "steps": [
          "Given the server returns the call to action VISIT WEBSITE",
          "And I am on the offer details screen",
          "When I open the website to opt in",
          "Then I will be taken to an external browser app and the offer opt-in website is show",
          "And the backend received 3 requests"
        ],
        "examples": []
      },
      {
        "name": "not able to open the website due to invalid URL",
        "description": "",
        "tags": [
          "@offers-opt-in"
        ],
        "steps": [
          "Given the server returns an invalid URL for the call to action VISIT WEBSITE",
          "And I am on the offer details screen",
          "When I open the website to opt in",
          "Then I can see an error message because number can not be called"
        ],
        "examples": []
      }
    ]
  },
  {
    "name": "show me my points balance",
    "description": "",
    "tags": [],
    "background": "",
    "scenarios": [
      {
        "name": "I can see my points balance collapsed",
        "description": "",
        "tags": [
          "@points-balance",
          "@not-desktop",
          "@sanity"
        ],
        "steps": [
          "Given I am on the landing screen",
          "Then I can see my name and points balance"
        ],
        "examples": []
      },
      {
        "name": "I can see my points and transactions",
        "description": "",
        "tags": [
          "@points-balance",
          "@desktop"
        ],
        "steps": [
          "Given I am on the landing screen",
          "Then I can see my name, points balance, what they're worth in pounds and last 5 transactions"
        ],
        "examples": []
      },
      {
        "name": "cached balance",
        "description": "",
        "tags": [
          "@points-balance",
          "@mobile-only",
          "@manual-only"
        ],
        "steps": [
          "Given I am on the landing screen",
          "And my points balance cannot be retrieved",
          "Then I see my last available name, points balance, what they're worth in pounds, last updated time"
        ],
        "examples": []
      },
      {
        "name": "I can see my points and transactions",
        "description": "",
        "tags": [
          "@points-balance",
          "@not-desktop",
          "@sanity"
        ],
        "steps": [
          "Given I am on the landing screen",
          "When I choose to see points balance in detail",
          "Then I can see my name, points balance, what they're worth in pounds and last updated time"
        ],
        "examples": []
      },
      {
        "name": "large points balance",
        "description": "",
        "tags": [
          "@points-balance"
        ],
        "steps": [
          "Given my points balance is large",
          "And I am on the landing screen",
          "When I choose to see points balance in detail",
          "Then I can see my points balance and what they're worth in pounds"
        ],
        "examples": []
      },
      {
        "name": "negative points balance",
        "description": "",
        "tags": [
          "@points-balance"
        ],
        "steps": [
          "Given my points balance is in the negative",
          "And I am on the landing screen",
          "When I choose to see points balance in detail",
          "Then I should see a visual indication that my points balance is negative"
        ],
        "examples": []
      },
      {
        "name": "first time request failed",
        "description": "",
        "tags": [
          "@points-balance"
        ],
        "steps": [
          "Given I don't get my points balance from the server",
          "And I am on the landing screen",
          "When I choose to see points balance in detail",
          "Then I see no first name, zero points, zero monetary value and no last updated time"
        ],
        "examples": []
      },
      {
        "name": "showing more transactions",
        "description": "",
        "tags": [
          "@points-balance",
          "@not-desktop",
          "@not-ready"
        ],
        "steps": [
          "Given I am on the landing screen",
          "When I choose to see points balance in detail",
          "Then I can see the last 5 transactions"
        ],
        "examples": []
      }
    ]
  },
  {
    "name": "logging in",
    "description": "",
    "tags": [],
    "background": "",
    "scenarios": [
      {
        "name": "refresh expired token",
        "description": "",
        "tags": [
          "@token-refresh",
          "@android-only"
        ],
        "steps": [
          "Given I am on the login screen",
          "And the token after logging in expires soon",
          "When I submit correct login details",
          "Then I should be logged in and taken to the next screen",
          "And I should see a list of offers",
          "When I decide to refresh offers after a while",
          "Then the backend should have received a valid refresh token",
          "And I should see a list of offers",
          "And the backend received 6 requests"
        ],
        "examples": []
      },
      {
        "name": "refresh expired token",
        "description": "",
        "tags": [
          "@token-refresh",
          "@ios-only"
        ],
        "steps": [
          "Given the token after logging in expires soon",
          "When I am on the offer details screen",
          "And I decide to go back to offers",
          "Then the backend should have received a valid refresh token",
          "And I should see a list of offers",
          "And the backend received 7 requests"
        ],
        "examples": []
      },
      {
        "name": "token refresh does not work due to server error",
        "description": "",
        "tags": [
          "@token-refresh",
          "@ios-only"
        ],
        "steps": [
          "Given the token after logging in expires soon",
          "When I am on the offer details screen",
          "And the server is not available",
          "And I decide to go back to offers",
          "Then an error message will be displayed",
          "And I should be able to retry",
          "And the backend received 5 requests"
        ],
        "examples": []
      },
      {
        "name": "token refresh does not work due to server error",
        "description": "",
        "tags": [
          "@token-refresh",
          "@android-only"
        ],
        "steps": [
          "Given I am on the login screen",
          "And the token after logging in expires soon",
          "When I submit correct login details",
          "Then I should be logged in and taken to the next screen",
          "And I should see a list of offers",
          "But the server is not available",
          "When I decide to refresh offers after a while",
          "Then an error message will be displayed",
          "And I should be able to retry",
          "And the backend received 5 requests"
        ],
        "examples": []
      },
      {
        "name": "log out if token is invalid",
        "description": "",
        "tags": [
          "@token-refresh",
          "@android-only",
          "@not-ready-android"
        ],
        "steps": [
          "Given I am on the login screen",
          "And the token after logging in expires soon",
          "When I submit correct login details",
          "Then I should be logged in and taken to the next screen",
          "And I should see a list of offers",
          "But the refresh token got invalidated",
          "When I decide to refresh offers after a while",
          "Then I should be taken back to the login screen",
          "And the backend received 4 requests"
        ],
        "examples": []
      },
      {
        "name": "log out if token is invalid",
        "description": "",
        "tags": [
          "@token-refresh",
          "@ios-only"
        ],
        "steps": [
          "Given the token after logging in expires soon",
          "When I am on the offer details screen",
          "But the refresh token got invalidated",
          "And I decide to go back to offers",
          "Then I should be taken back to the launch screen",
          "And the backend received 5 requests"
        ],
        "examples": []
      },
      {
        "name": "renew token before any other network calls are made",
        "description": "",
        "tags": [
          "@token-refresh",
          "@ios-only"
        ],
        "steps": [
          "Given the token after logging in expires soon",
          "When I am on the offer details screen",
          "And I decide to go back to offers",
          "Then the backend should have received a valid refresh token",
          "And the backend received 7 requests",
          "And offers and collector requests are made"
        ],
        "examples": []
      },
      {
        "name": "renew token before any other network calls are made",
        "description": "",
        "tags": [
          "@token-refresh",
          "@android-only",
          "@not-ready-android"
        ],
        "steps": [
          "Given I am on the login screen",
          "And the token after logging in expires soon",
          "When I submit correct login details",
          "Then I should be logged in and taken to the next screen",
          "And I should see a list of offers",
          "When I decide to refresh offers after a while",
          "Then the backend should have received a valid refresh token",
          "And the backend received 6 requests",
          "And offers and collector requests are made"
        ],
        "examples": []
      }
    ]
  }
]


});
