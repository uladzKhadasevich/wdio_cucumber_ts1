Feature: The first suite with tests

  # Scenario: first test

  # Given I am on the AssetManagement page
  # When I open hardware Hardware Tab
  # Then I sholud see Add New Hardware Button


  Scenario Outline: Titles of pages

    Given I am on the <pageName> page
    Then The title inside body is <title> on the <pageName> page
    Examples:
      | pageName       | title                |
      | Dashboard      | Dashboard            |
      | Hardware       | View Hardware        |
      | Software       | View Software        |
      | IssuedLicenses | View Issued Licenses |
      | Requests       | View Request         |

# Scenario Outline: As a user, I can log into the secure area

#   Given I am on the AssetManagement page
#   When I login with <username> and <password>
#   Then I should see a flash message saying <message>
#   Examples:
#     | username | password             | message                        |
#     | tomsmith | SuperSecretPassword! | You logged into a secure area! |
#     | foobar   | barfoo               | Your username is invalid!      |




