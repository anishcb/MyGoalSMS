const { expect } = require('@playwright/test');

module.exports = {
  
  assertPageTitle: async (page, expectedTitle) => {
    await expect(page).toHaveTitle(expectedTitle);
  },

  
  assertUrl: async (page, expectedUrl) => {
    await expect(page).toHaveURL(expectedUrl);
  },

  
  assertElementVisible: async (page, selector) => {
    await expect(page.locator(selector)).toBeVisible();
  },

 
  assertElementHidden: async (page, selector) => {
    await expect(page.locator(selector)).toBeHidden();
  },

 
  assertElementText: async (page, selector, expectedText) => {
    await expect(page.locator(selector)).toHaveText(expectedText);
  },


  assertElementValue: async (page, selector, expectedValue) => {
    await expect(page.locator(selector)).toHaveValue(expectedValue);
  },

  assertElementEnabled: async (page, selector) => {
    await expect(page.locator(selector)).toBeEnabled();
  },

 
  assertElementDisabled: async (page, selector) => {
    await expect(page.locator(selector)).toBeDisabled();
  },

 
  assertElementAttribute: async (page, selector, attributeName, expectedValue) => {
    await expect(page.locator(selector)).toHaveAttribute(attributeName, expectedValue);
  },

 
  assertCheckboxChecked: async (page, selector) => {
    await expect(page.locator(selector)).toBeChecked();
  },

  
  assertCheckboxNotChecked: async (page, selector) => {
    await expect(page.locator(selector)).not.toBeChecked();
  },

 
  assertInputEmpty: async (page, selector) => {
    await expect(page.locator(selector)).toHaveValue('');
  },

  
  assertElementCount: async (page, selector, expectedCount) => {
    await expect(page.locator(selector)).toHaveCount(expectedCount);
  },


  assertScreenshotMatch: async (page, screenshotName) => {
    await expect(page).toHaveScreenshot(`${screenshotName}.png`);
  }
};
