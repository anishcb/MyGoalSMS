async function clickElement(page, selector) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.waitFor({ state: 'visible' });
  await element.click();
}

async function typeText(page, selector, text) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.waitFor({ state: 'visible' });
  await element.fill(text);
}

async function selectDropdownByValue(page, selector, value) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.waitFor({ state: 'visible' });
  await element.selectOption({ value });
}

async function selectDropdownByLabel(page, selector, label) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.waitFor({ state: 'visible' });
  await element.selectOption({ label });
}

async function getText(page, selector) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.waitFor({ state: 'visible' });
  return await element.textContent() || '';
}

async function waitForVisibility(page, selector) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.waitFor({ state: 'visible' });
}

async function waitForHidden(page, selector) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.waitFor({ state: 'hidden' });
}

async function isElementVisible(page, selector) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  return await element.isVisible();
}

async function isElementEnabled(page, selector) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  return await element.isEnabled();
}

async function isChecked(page, selector) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  return await element.isChecked();
}

async function uploadFile(page, selector, filePath) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.setInputFiles(filePath);
}

async function hoverOverElement(page, selector) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.hover();
}

async function pressKey(page, selector, key) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.press(key);
}

async function clearInput(page, selector) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.fill('');
}

async function scrollToElement(page, selector) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.scrollIntoViewIfNeeded();
}

async function doubleClick(page, selector) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.dblclick();
}

async function rightClick(page, selector) {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.click({ button: 'right' });
}

async function dragAndDrop(page, sourceSelector, targetSelector) {
  const source = typeof sourceSelector === 'string' ? page.locator(sourceSelector) : sourceSelector;
  const target = typeof targetSelector === 'string' ? page.locator(targetSelector) : targetSelector;
  await source.dragTo(target);
}

module.exports = {
  clickElement,
  typeText,
  selectDropdownByValue,
  selectDropdownByLabel,
  getText,
  waitForVisibility,
  waitForHidden,
  isElementVisible,
  isElementEnabled,
  isChecked,
  uploadFile,
  hoverOverElement,
  pressKey,
  clearInput,
  scrollToElement,
  doubleClick,
  rightClick,
  dragAndDrop,
};
