const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const assertions = require('../utils/assertions');
const acredentials = require('../test-data/admin_credentials.json');
const { log } = require('../utils/logger');

test.describe('Dashboard Page Option Click Test Suite', () => {
  let loginPage;
  let dashboardPage;
  let page;

  test.beforeEach(async ({ page: testPage }) => {
    page = testPage;
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.verifyLoginFunctionalityForAdmin(acredentials.username, acredentials.password);

    dashboardPage = new DashboardPage(page);
  });

  test('Teacher option is clickable', async () => {
    await dashboardPage.verifyTeacherOptionIsClickableOrNot();
    await assertions.assertUrl(page, /.*teacher\.php/);
    log('Verify the teacher option is clickable test passed');
  });

  test('Student option is clickable', async () => {
    await dashboardPage.verifyStudentOptionIsClickableOrNot();
    await assertions.assertUrl(page, /.*student\.php/);
  });

  test('Subject option is clickable', async () => {
    await dashboardPage.verifySubjectOptionIsClickableOrNot();
    await assertions.assertUrl(page, /.*subjects\.php/);
    log('Verify the subject option is clickable test passed');
  });

  test('Notice option is clickable', async () => {
    await dashboardPage.verifyNoticeOptionIsClickableOrNot();
    await assertions.assertUrl(page, /.*noticeboard\.php/);
    log('Verify the notice option is clickable test passed');
  });

  test('Attendance option is clickable', async () => {
    await dashboardPage.verifyAttendanceOptionIsClickableOrNot();
    await assertions.assertUrl(page, /.*attendence\.php/);
    log('Verify the attendance option is clickable test passed');
  });

  test('Timetable option is clickable', async () => {
    await dashboardPage.verifyTimetableOptionIsClickableOrNot();
    await assertions.assertUrl(page, /.*timetable\.php/);
    log('Verify the timetable option is clickable test passed');
  });

  test('Syllabus option is clickable', async () => {
    await dashboardPage.verifySyllabusOptionIsClickableOrNot();
    await assertions.assertUrl(page, /.*syllabus\.php/);
    log('Verify the syllabus option is clickable test passed');
  });

  test('Notes option is clickable', async () => {
    await dashboardPage.verifyNotesOptionIsClickableOrNot();
    await assertions.assertUrl(page, /.*notes\.php/);
    log('Verify the notes option is clickable test passed');
  });

  test('Marks option is clickable', async () => {
    await dashboardPage.verifyMarksOptionIsClickableOrNot();
    await assertions.assertUrl(page, /.*marks\.php/);
    log('Verify the marks option is clickable test passed');
  });

  test('Buses option is clickable', async () => {
    await dashboardPage.verifyBusesOptionIsClickableOrNot();
    await assertions.assertUrl(page, /.*buses\.php/);
    log('Verify the buses option is clickable test passed');
  });
});
