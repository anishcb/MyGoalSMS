const {
  clickElement,typeText, uploadFile
} = require('../utils/actions');
const { log } = require('../utils/logger');
class NoticePage {
  constructor(page) {
    this.page = page;
    this.noticeTitle = page.locator('#notice-title');
    this.noticeBody = page.locator('#notice-body');
    this.uploadFile = page.locator('#notice-file');
    this.postButton = page.locator('#post-notice');
    this.showNotice = page.locator('//div[text()="Notice uploaded successfully!"]');
    
  }



 async verifyTheNoticeIsPubliceOrNot(title, body, filePath) {
    await typeText(this.page, this.noticeTitle, title);
    log('Successfully entered notice title');
    await typeText(this.page, this.noticeBody, body);
    log('Successfully entered notice body');
    await uploadFile(this.page, this.uploadFile, filePath);
    log('Successfully uploaded the file for notice');
    await clickElement(this.page, this.postButton);
    log('Successfully clicked on post button');
   
  }

  
}

module.exports = { NoticePage };