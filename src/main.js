const execSync = require('child_process').execSync;
const os = require('os');
const user = os.userInfo().username;

const notify = (text, executeTime) => {
  if (
    typeof text !== 'string' ||
    typeof executeTime !== 'string' ||
    !Boolean(/^((\d*))$/.exec(executeTime))
  ) {
    return false;
  }

  const opsys = process.platform;
  let commandMessage;
  if (opsys == 'darwin') {
    // MacOS
    commandMessage = 'osascript -e';
  } else if (opsys == 'win32' || opsys == 'win64') {
    // Windows
    commandMessage = 'msg';
  } else if (opsys == 'linux') {
    // Linux
    commandMessage = `export DISPLAY=':0.0' && xmessage`;
  }
  let otputControl;
  setTimeout(() => {
    execSync(`${commandMessage} ${user} ${text}`);
  }, executeTime);
  return otputControl;
};

module.exports = { notify };
