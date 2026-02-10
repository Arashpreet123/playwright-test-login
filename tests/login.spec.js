
const {test, expect} = require('@playwright/test');

test("Valid Login", async function({page}) {
   
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.locator('#username').fill('student');

    await page.locator('#password').fill('Password123');

    await page.locator('#submit').click();

    await expect(page.locator('h1')).toHaveText('Logged In Successfully');
    await expect(page).toHaveURL(/logged-in-successfully/);

    // await page.getBy
}) 


// Testing invalid login
test("Invalid Login", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  await page.fill('#username', 'wrongUser');
  await page.fill('#password', 'wrongPass');
  await page.click('#submit');

  await expect(page.locator('#error')).toContainText('Your username is invalid!');
});

