const env = process.env.TEST_ENV || 'dev'; 

const urls = {
  dev: 'http://localhost/school-management-system-main/login.php',
  staging: 'http://localhost/school-management-system-main/login.php',
  prod: 'http://localhost/school-management-system-main/login.php',
};

module.exports = {
  baseURL: urls[env],
  envName: env
};