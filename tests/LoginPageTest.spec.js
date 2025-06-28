const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const assertions = require('../utils/assertions');
const { log } = require('../utils/logger');
const acredentials = require('../test-data/admin_credentials.json');
const tcredentials = require('../test-data/teacher_credentials.json');
const scredentials = require('../test-data/student_credentials.json');

test.describe('Login Page Test Suite', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Verify the login functionality for admin', async ({ page }) => {
    await loginPage.verifyLoginFunctionalityForAdmin(acredentials.username, acredentials.password);
    await assertions.assertUrl(page, /dashboard/);
    log('Verify the login functionality for admin test passed');
  });

  test('Verify the login functionality for teacher', async ({ page }) => {
    await loginPage.verifyLoginFunctionalityForTeacher(tcredentials.username, tcredentials.password);
    await assertions.assertUrl(page, /dashboard/);
    log('Verify the login functionality for teacher test passed');
  });

  test('Verify the login functionality for student', async ({ page }) => {
    await loginPage.verifyLoginFunctionalityForStudent(scredentials.username, scredentials.password);
    await assertions.assertUrl(page, /dashboard/);
    log('Verify the login functionality for student test passed');
  });

  
  test('View Password Icon Works', async ({ page }) => {
    await assertions.assertElementVisible(page, '#togglePassword');
    const passwordField = page.locator('#password');
    await loginPage.verifyViewButton(scredentials.password);
    const typeAttribute = await passwordField.getAttribute('type');
    expect(typeAttribute).toBe('text'); 
    log('Password visibility toggle test passed');
  });
});
