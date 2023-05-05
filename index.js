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

output(randomColor({ hue: inputColor, luminosity: inputLuminosity }));
