require('dotenv').config();

const slash = process.platform === 'win32' ? process.env.USERPROFILE : '/';

const storage = slash;
if (!storage) {
  console.error(
    'Storage path not defined,',
    'set a value for HOME_CLOUD_STORAGE environment variable'
  );
  process.exit(1);
}

module.exports = storage;
