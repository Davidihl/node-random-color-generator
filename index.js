// Add Module Import Here
import chalk from 'chalk';
import randomColor from 'randomcolor';

const inputColor = process.argv[2];
const inputLuminosity = process.argv[3];

function output(colorcode) {
  console.log(
    chalk.hex(colorcode)(`###############################
###############################
###############################
#####                     #####
#####      ${colorcode}        #####
#####                     #####
###############################
###############################
###############################`),
  );
}

if (inputColor && inputLuminosity) {
  const color = randomColor({
    luminosity: inputLuminosity,
    hue: inputColor,
  });
  output(color);
} else if (inputColor) {
  const color = randomColor({
    count: 1,
    hue: inputColor,
  });
  output(color[0]);
} else {
  const color = randomColor({
    luminosity: 'random',
    hue: 'random',
  });
  output(color);
}
