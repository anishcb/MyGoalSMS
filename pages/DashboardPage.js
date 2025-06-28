const {
  clickElement
} = require('../utils/actions');
const { log } = require('../utils/logger');
class DashboardPage {
  constructor(page) {
    this.page = page;
    this.teacherOption = page.locator('a[href="teacher.php"]');
    this.studentOption = page.locator('a[href="student.php"]');
    this.subjectOption = page.locator('a[href="subjects.php"]');
    this.noticeOption = page.locator('//a[text()="Notice Board"]');
    this.attendanceOption = page.locator('a[href="attendence.php"]');
    this.timetableOption = page.locator('a[href="timetable.php"]');
    this.syllabusOption = page.locator('a[href="syllabus.php"]');
    this.notesOption = page.locator('a[href="notes.php"]');
    this.marksOption = page.locator('a[href="marks.php"]');
    this.busesOption = page.locator('a[href="buses.php"]');
    
  }



 async verifyTeacherOptionIsClickableOrNot() {
     await clickElement(this.page, this.teacherOption);
    log('Successfully clicked on teacher option');
   
  }

  async verifyStudentOptionIsClickableOrNot() {
     await clickElement(this.page, this.studentOption);
    log('Successfully clicked on student option');
   
  }
 async verifySubjectOptionIsClickableOrNot() {
     await clickElement(this.page, this.subjectOption);
    log('Successfully clicked on subject option');
   
  }
  async verifyNoticeOptionIsClickableOrNot() {
     await clickElement(this.page, this.noticeOption);
    log('Successfully clicked on notice option');
   
  }
  async verifyAttendanceOptionIsClickableOrNot() {
     await clickElement(this.page, this.attendanceOption);
    log('Successfully clicked on attendence option');
   
  }

   async verifyTimetableOptionIsClickableOrNot() {
     await clickElement(this.page, this.timetableOption);
    log('Successfully clicked on timetable option');
  }

   async verifySyllabusOptionIsClickableOrNot() {
     await clickElement(this.page, this.syllabusOption);
    log('Successfully clicked on Syllabus option');
  }

  async verifyNotesOptionIsClickableOrNot() {
     await clickElement(this.page, this.notesOption);
    log('Successfully clicked on notes option');
  }
  async verifyMarksOptionIsClickableOrNot() {
     await clickElement(this.page, this.marksOption);
    log('Successfully clicked on marks option');
  }

  async verifyBusesOptionIsClickableOrNot() {
     await clickElement(this.page, this.busesOption);
    log('Successfully clicked on buses option');
  }
}

module.exports = { DashboardPage };