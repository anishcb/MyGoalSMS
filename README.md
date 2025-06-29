**Running Tests in Different Environments**
If you want to run tests in a specific environment, you can use the following commands:
1. Staging Environment
npx cross-env TEST_ENV=staging npx playwright test
2. Production Environment
npx cross-env TEST_ENV=prod npx playwright test
3. Development Environment
npx cross-env TEST_ENV=dev npx playwright test
**Running Only UI Tests**
If you want to execute only the UI test cases, you can use the following command:
npx playwright test --project="UI Tests"
Additionally, this command has been added as a script in the package.json file. So, you can also run the UI tests using:
npm run test:ui
**Running Only api Tests**
If you want to execute only the API test cases, you can use the following command:
npx playwright test --project="API Tests"
Additionally, this command has been added as a script in the package.json file. So, you can also run the API tests using:
npm run test:api
**Sharing Test Report to Google Chat**
If you want to share the test execution report to Google Chat, you can run the following command:
node sendToChat.js
Additionally, this command is also defined as a script in the package.json file. So, you can execute it using:
npm run test:send-report-to-chat
This will automatically send the generated report to the configured Google Chat channel.
**Sharing Test Report to Gmail**
If you want to share the test execution report to Gmail, you can run the following command:
node send-report.js
Additionally, this command is also defined as a script in the package.json file. So, you can execute it using:
npm run test:send-report-to-gmail
This will automatically send the generated report to the configured gmail.
