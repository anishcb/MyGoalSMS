const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { NoticePage } = require('../pages/NoticePage');
const assertions = require('../utils/assertions');
const { isUserExists } = require('../utils/db');
//const path = require('path');

const acredentials = require('../test-data/admin_credentials.json');
const noticeData = require('../test-data/notice_data.json');


test.describe('Notice Posting Test Suite', () => {
  let noticePage;

  test.beforeEach(async ({ page }) => {
    // Login first
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.verifyLoginFunctionalityForAdmin(acredentials.username, acredentials.password);
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.verifyNoticeOptionIsClickableOrNot();
    noticePage = new NoticePage(page);
  });

  test('Admin should be able to post a notice successfully', async ({ page }) => {
    // const title = 'Important Notice';
    // const body = 'This is an automated test notice.';
     //const filePath = path.resolve(noticeData.filePath);
    await noticePage.verifyTheNoticeIsPubliceOrNot(noticeData.title, noticeData.body,"E:\\MyGoalSMS\\test-data\\rasid.pdf" );
    const expectedText = page.locator('//div[text()="Notice uploaded successfully!"]'); 
    await expect(expectedText).toBeVisible();

    const exists = await isUserExists('My New notice Title');
    expect(exists).toBe(true);
  });
});

