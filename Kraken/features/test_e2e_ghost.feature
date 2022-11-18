Feature: Automated GHOST tests

  @user2 @web
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
    And I wait
    And I click publish
    And I wait
    And I click final review
    And I wait
    And I click publish post
    And I wait for 3 seconds
    And I surf by the post
    And I wait for 5 seconds

  @user3 @web
  Scenario: My scenario 3
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

  @user4 @web
  Scenario: My scenario 4
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<EMAIL>"
    And I wait
    And I enter password "<PASSWORD>"
    And I wait
    And I click login
    And I wait for 3 seconds
    And I click in members
    And I wait for 3 seconds
    And I click in new member
    And I wait for 3 seconds
    And I imput a new member "$name_2", "$email_2", "$string_2", "$string_3"
    And I wait for 3 seconds

  @user5 @web
  Scenario: My scenario 5
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<EMAIL>"
    And I wait
    And I enter password "<PASSWORD>"
    And I wait
    And I click login
    And I wait for 3 seconds
    And I click in members
    And I wait for 3 seconds
    And I click in first member exist
    And I wait for 3 seconds
    And I edit an exists member "$name_2", "$string_4", "$string_5"
    And I wait for 3 seconds

  @user6 @web
  Scenario: My scenario 6
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<EMAIL>"
    And I wait
    And I enter password "<PASSWORD>"
    And I wait
    And I click login
    And I wait for 3 seconds
    And I click in members
    And I wait for 3 seconds
    And I click in first member exist
    And I wait for 3 seconds
    And I click in Membersettings
    And I wait for 3 seconds
    And I click in DeleteMember
    And I wait for 3 seconds
    And I confirm Delete Member
    And I wait for 3 seconds

  @user7 @web
  Scenario: My scenario 7
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
    And I select first Active user
    And I wait for 3 seconds
    And I change password "<OLDPASSWORD>" and "<NEWPASSWORD>"
    And I wait for 7 seconds

  @user11 @web
  Scenario: Eliminar Post
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
    And I click on a published post
    And I wait
    And I click settings button
    And I wait
    And I click delete button
    And I wait
    And I click confirmation button
    And I wait for 3 seconds
    And I surf by the post
    And I wait for 5 seconds

  @user16 @web
  Scenario: List all pages
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<EMAIL>"
    And I wait
    And I enter password "<PASSWORD>"
    And I wait
    And I click login
    And I wait for 3 seconds
    And I go to pages
    And I wait
    Then I see list of pages
    Then I wait

  @user17 @web
  Scenario: Send invitation to people
    Given I navigate to page "<URL>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I wait
    And I enter password "<PASSWORD>"
    And I wait
    And I click login
    And I wait for 2 seconds
    And I go to settings
    And I wait
    And I go to staff settings
    And I wait
    And I click invite people
    And I wait
    And I enter random email invitation "$email_1"
    And I wait
    And I select the administrator option
    And I wait
    And I click send invitation now
    And I wait
    And I reload the page
    And I wait for 3 seconds
    Then I see the invitation "$$email_1"
    Then I wait

  @user18 @web
  Scenario: Edit twitter card
    Given I navigate to page "<URL>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I wait
    And I enter password "<PASSWORD>"
    And I wait
    And I click login
    And I wait for 2 seconds
    And I navigate to page "<URL_GENERAL_SETTINGS>"
    And I wait for 2 seconds
    And I click expand twitter card
    And I wait
    And I enter random twitter title "$name_1"
    And I wait
    And I enter random twitter description "$name_2"
    And I wait
    And I click save changes of the twitter card
    And I wait
    And I reload the page
    And I wait for 2 seconds
    And I click expand twitter card
    And I wait
    Then I see the twitter card changes made "$$name_1", "$$name_2"
    Then I wait

  @user19 @web
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
    And I click profile
    And I wait
    And I enter random full name "$name_1"
    And I wait
    And I enter random slug "$name_2"
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

  @user20 @web
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
    And I wait
    And I click confirm delete page
    Then I wait
