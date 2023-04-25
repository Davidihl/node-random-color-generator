// Add Module Import Here
import chalk from 'chalk'; //Library I will use for color output
import randomcolor from 'randomcolor';

const inputColor = process.argv[2];
const inputLuminosity = process.argv[3];

function output(colorcode) {
  console.log(
    chalk.hex(`${colorcode}`)(`###############################
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
  console.log(inputColor + ' ' + inputLuminosity);
} else if (inputColor) {
  const convertColor = chroma(`${inputColor}`);
  console.log(convertColor);
} else {
  const randomHexColor = chroma.random();
  console.log(chroma.random());
  //output(randomHexColor.color);
}
