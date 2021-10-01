Feature: Example
    Scenario: Should navigate to the create contact page
        When I navigate to "http://localhost:4200/create"
        Then The title should be "Create contact"
