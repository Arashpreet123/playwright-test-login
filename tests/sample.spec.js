// Only need test and expect modules
// Test to declare test, expect is for assertion
const {test, expect} = require('@playwright/test');

test("My First Test", async function({page}) {
    
    expect(12).toBe(12)



}) 
// Will skip test
test.skip("My Second Test", async function({page}) {
    expect(100).toBe(101)
})

// Using test.only will only test this one
test("My Third Test", async function({page}) {
    expect("Test User").toContain("User")
})

test("My Forth Test", async function({page}) {
    expect(true).toBeTruthy()
})

test("My Fifth Test", async function({page}) {
    expect(false).toBeFalsy()
})

test("My Sixth Test", async function({page}) {
    expect("Test User".includes("Test")).toBeTruthy()
})