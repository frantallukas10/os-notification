#!/usr/bin/env node

const { notify } = require('./src/main.js');

const yellowColor = '\x1b[33m%s\x1b[0m';
const redColor = '\x1b[31m%s\x1b[0m';

const getValue = type => {
  let output = false;
  process.argv.map(item => {
    if (item.includes(type)) {
      output = item.replace(`${type}=`, '');
    }
  });
  return output;
};

const message = getValue('message');
const executeTime = getValue('time');

if (notify(message, executeTime) === false) {
  console.log(
    redColor,
    '\nplease define correct your message and execution time!'
  );
  console.log(
    yellowColor,
    '--------------------------------------' +
      '\nCorrectly defined command:' +
      '\nnotify message="your message" time="1000"'
  );
}
