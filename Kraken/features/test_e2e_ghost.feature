Feature: Automated GHOST tests

  @user1 @web
  Scenario: Crear Post
    Given I navigate to page "<URL>"
    And I wait
    And I enter email "<EMAIL>"
    And I wait
    And I enter password "<PASSWORD>"
    And I wait
    And I click login
    And I wait for 3 seconds
    And I go to posts
    And I wait
    And I click to new post
    And I wait
    And I enter title "<TITLE_NEW_POST>"
    And I wait
    And I write the post "<CONTENT_NEW_POST>"
    And I wait
    And I click review
    And I wait for 6 seconds

  @user2 @web
  Scenario: Crear Nueva cuenta
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<EMAIL>"
    And I wait
    And I enter password "<PASSWORD>"
    And I wait
    And I click login
    And I wait for 3 seconds
    And I navigate to settings
    And I wait for 3 seconds
    And I go to staff
    And I wait for 3 seconds
    And I click button invitePeople
    And I wait for 3 seconds
    And I enter email invite "$email_1"
    And I wait for 3 seconds
    And I click radioButton1
    And I wait for 3 seconds
    And I click button SendInvitation
    And I wait for 20 seconds


  @user3 @web
  Scenario: Create page
    Given I navigate to page "<URL>"
    And I wait
    And I enter email "<EMAIL>"
    And I wait
    And I enter password "<PASSWORD>"
    And I wait
    And I click login
    And I wait for 3 seconds
    And I go to pages
    And I wait
    And I click on new page
    And I wait
    And I type the page title
    And I wait
    And I click page settings button
    And I wait
    And I click publish button
    And I wait
    And I click final review button
    And I wait
    And I click publish now button
    And I wait for 3 seconds



  @user4 @web
  Scenario: Edit my profile information
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<EMAIL>"
    And I wait
    And I enter password "<PASSWORD>"
    And I wait
    And I click login
    And I wait for 2 seconds
    And I click avatar
    And I wait
    And I click profile "<EMAIL>"
    And I wait
    And I enter random full name "$name_1"
    And I wait
    And I enter random slug "<EMAIL>"
    And I wait
    And I enter random location "$name_3"
    And I wait
    And I enter random website "$url_4"
    And I wait
    And I enter random bio information "$string_5"
    And I wait
    And I click profile save
    And I wait
    And I reload the page
    And I wait for 2 seconds
    Then I see the profile with name "$$name_1"
    Then I wait

  @user5 @web
  Scenario: Delete page
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<EMAIL>"
    And I wait
    And I enter password "<PASSWORD>"
    And I wait
    And I click login
    And I wait for 2 seconds
    And I click pages
    And I wait for 2 seconds
    And I select first page
    And I wait
    And I click page settings
    And I wait
    And I click delete page
    And I wait for 3 seconds
    And I click confirm delete page
    Then I wait