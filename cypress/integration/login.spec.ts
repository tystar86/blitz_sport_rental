import {createRandomUser} from "../support/helpers"

describe("index page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("goes to the signup page", () => {
    cy.contains("a", /Sign Up/i).click()
    cy.location("pathname").should("equal", "/signup")
  })

  it("goes to the login page", () => {
    cy.contains("a", /login/i).click()
    cy.location("pathname").should("equal", "/login")
  })

  it("allows the user to signup", () => {
    const user = createRandomUser()

    cy.signup(user)

    cy.location("pathname").should("equal", "/")
    cy.contains("button", /Logout/i)
  })

  it("allows the user to log in", () => {
    const user = createRandomUser()

    cy.signup(user)

    cy.contains("button", /Logout/i).click()
    cy.contains("a", /login/i).click()

    cy.contains("Email").find("input").type(user.email)
    cy.contains("Password").find("input").type(user.password)
    cy.contains("button", /login/i).click()

    cy.location("pathname").should("equal", "/")
    cy.contains("button", /Logout/i)
  })

  it("allows the user to logout", () => {
    const user = createRandomUser()

    cy.signup(user)

    cy.contains("button", /Logout/i).click()

    cy.location("pathname").should("equal", "/")
    cy.contains("a", /login/i)
  })

//   it("tracks anonymous sessions", () => {
//     // TODO - why does this fail on windows??
//     cy.skipOn("windows")
//     const user = createRandomUser()

//     cy.contains("button", /Track view/i).click()
//     cy.contains("button", /Track view/i).click()
//     cy.contains('"views": 2')

//     cy.signup(user)

//     cy.contains('"views": 2')
//   })
})

export {}