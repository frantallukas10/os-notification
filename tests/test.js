const { notify } = require('../src/main.js');

describe('Testing gohome package', () => {
  const options = [
    'Example test',
    '1000',
    1000,
    true,
    false,
    {},
    [],
    undefined,
    null,
    '+1000',
    '-1000',
    -1000
  ];
  const correctInputs = [];
  for (let i = 0; i < options.length; i++) {
    for (let j = 0; j < options.length; j++) {
      correctInputs.push({
        message: options[i],
        executeTime: options[j]
      });
    }
  }

  correctInputs.map(input => {
    test(
      '\nTesting notify function with correct inputs' +
        `\nMessage: ${input.message}` +
        `\nExecute time: ${input.executeTime}\n`,
      () => {
        expect(notify(input.message, input.executeTime)).toMatchSnapshot();
      }
    );
  });
});
