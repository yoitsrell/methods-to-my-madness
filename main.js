/******************
 * YOUR CODE HERE *
 ******************/

function slice(str, start = 0, end = str.length) {
  let sliced = '';

  for (let i = start; i < end; i++) {
    sliced += str[i];
  }

  return sliced;
}

function repeat(str, repetitions) {
  let count = 1;
  let repeated = '';

  while (count <= repetitions) {
    repeated += str;

    count++;
  }

  return repeated;
}

function startsWith(str, substr) {
  // for (let i = 0; i < substr.length; i++) {
  // if (str[i] !== substr[i]) {
      // return false;
    // }
  // }

  // return true;

  return slice(str, 0, substr.length) === substr;
}

function endsWith(str, substr) {
  return slice(str, str.length - substr.length) === substr;
}

function includes(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  return false;
}

function join(arr, separator = '') {
  let joined = arr[0];

  for (let i = 1; i < arr.length; i++) {
    joined += separator + arr[i];
  }

  return joined;
}

function split(str, separator = '') {
  const splitsville = [];
  let start = 0; 
  for (let i = 0; i < str.length; i++) {
    if (str[i] === separator) {
      splitsville.push(slice(str, start, i));
      start = i + 1;
    }
  }

  splitsville.push(slice(str, start));

  return splitsville;
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof slice === 'undefined') {
  slice = undefined;
}

if (typeof repeat === 'undefined') {
  repeat = undefined;
}

if (typeof startsWith === 'undefined') {
  startsWith = undefined;
}

if (typeof endsWith === 'undefined') {
  endsWith = undefined;
}

if (typeof includes === 'undefined') {
  includes = undefined;
}

if (typeof join === 'undefined') {
  join = undefined;
}

if (typeof split === 'undefined') {
  split = undefined;
}

if (typeof trimStart === 'undefined') {
  trimStart = undefined;
}

if (typeof trimEnd === 'undefined') {
  trimEnd = undefined;
}



module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
