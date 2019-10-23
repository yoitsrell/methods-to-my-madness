const {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
} = require('./main.js')


describe('slice', () => {
  it(`given no parameters beyond the string, will simply return the string`, () => {
    expect(slice('hello')).toBe('hello')
    expect(slice('goodbye')).toBe('goodbye')
  })
  
  it(`given a second parameter as a number, returns the string from that index on`, () => {
    expect(slice('hello', 1)).toBe('ello')
    expect(slice('goodbye', 2)).toBe('odbye')
  })
  
  it(`given a second parameter beyond the length of the string, returns an empty string`, () => {
    expect(slice('hello', 5)).toBe('')
    expect(slice('goodbye', 20)).toBe('')
  })
  
  it(`given a third parameter as a number, returns the string from until that index, EXCLUSIVE`, () => {
    expect(slice('hello', 1, 2)).toBe('e')
    expect(slice('goodbye', 2, 5)).toBe('odb')
  })
})

describe('repeat', () => {
  it(`given a string and a number, returns the string repeated that many times`, () => {
    expect(repeat('hello', 1)).toBe('hello')
    expect(repeat('Hello', 2)).toBe('HelloHello')
    expect(repeat('Bye', 3)).toBe('ByeByeBye')
  });
});


describe('startsWith', () => {
  it(`can tell whether the first given string starts with the second single-character string`, () => {
    expect(startsWith('hello', 'h')).toBe(true)
    expect(startsWith('hello', 'e')).toBe(false)
    expect(startsWith('goodbye', 'g')).toBe(true)
    expect(startsWith('goodbye', 'e')).toBe(false)
  })
  
  it(`can tell whether the first given string starts with the second multi-character string`, () => {
    expect(startsWith('hello', 'hell')).toBe(true)
    expect(startsWith('hello', 'hll')).toBe(false)
    expect(startsWith('hello', 'ello')).toBe(false)
    expect(startsWith('goodbye', 'good')).toBe(true)
    expect(startsWith('goodbye', 'bye')).toBe(false)
  })
  
  it(`can tell whether the first given string starts with the second given string when the strings are identical`, () => {
    expect(startsWith('hello', 'hello')).toBe(true)
    expect(startsWith('goodbye', 'goodbye')).toBe(true)
  })
})

describe('endsWith', () => {
  it(`can tell whether the first given string ends with the second single-character string`, () => {
    expect(endsWith('hello', 'o')).toBe(true)
    expect(endsWith('hello', 'l')).toBe(false)
    expect(endsWith('goodbye', 'e')).toBe(true)
    expect(endsWith('goodbye', 'g')).toBe(false)
  })
  
  it(`can tell whether the first given string ends with the second multi-character string`, () => {
    expect(endsWith('hello', 'ello')).toBe(true)
    expect(endsWith('hello', 'elo')).toBe(false)
    expect(endsWith('hello', 'hell')).toBe(false)
    expect(endsWith('goodbye', 'bye')).toBe(true)
    expect(endsWith('goodbye', 'good')).toBe(false)
  })
  
  it(`can tell whether the first given string ends with the second given string when the strings are identical`, () => {
    expect(endsWith('hello', 'hello')).toBe(true)
    expect(endsWith('goodbye', 'goodbye')).toBe(true)
  })
});

describe('includes', () => {
  it(`returns true if the given array holds the given item`, () => {
    expect(includes(['hello', 'goodbye', 3, false], 'hello')).toBe(true)
    expect(includes(['hello', 'goodbye', 3, false], 'goodbye')).toBe(true)
    expect(includes(['hello', 'goodbye', 3, false], 3)).toBe(true)
    expect(includes(['hello', 'goodbye', 3, false], false)).toBe(true)
  })
  
  it(`returns false if the given array does not hold the given item`, () => {
    expect(includes(['hello', 'goodbye', 3, false], 'hi')).toBe(false)
    expect(includes(['hello', 'goodbye', 3, false], 'bon voyage')).toBe(false)
    expect(includes(['hello', 'goodbye', 3, false], 4)).toBe(false)
    expect(includes(['hello', 'goodbye', 3, false], true)).toBe(false)
  })
  
  it(`returns false if the given array holds similar items to the given item`, () => {
    expect(includes(['hello', 'goodbye', 3, false], 'he')).toBe(false)
    expect(includes(['hello', 'goodbye', 3, false], 'good')).toBe(false)
    expect(includes(['hello', 'goodbye', 3, false], -3)).toBe(false)
    expect(includes(['hello', 'goodbye', 3, false], 'false')).toBe(false)
  })
})

describe('join', () => {
  it(`given an array of strings, returns one string`, () => {
    expect(join(['Colin', 'Mesuara', 'Genghis'])).toBe('ColinMesuaraGenghis');
    expect(join(['Colin', 'Mesuara', 'Pak'])).toBe('ColinMesuaraPak');
  })

  it(`given a second parameter, a string representing a "separator", returns one string with the separator placed between each initial string`, () => {
    expect(join(['Colin', 'Mesuara', 'Genghis', 'Pak'], '+')).toBe('Colin+Mesuara+Genghis+Pak');
    expect(join(['Pak', 'Mesuara', 'Genghis', 'Colin', `also isn't.`], ' is awesome and ')).toBe(`Pak is awesome and Mesuara is awesome and Genghis is awesome and Colin is awesome and also isn't.`);
  })
});

describe('split', () => {
  it(`given only the first parameter, a string, it puts the entire string as the first element in an array`, () => {
    expect(split('hello')).toEqual(['hello'])
    expect(split('no goodbyes, ever')).toEqual(['no goodbyes, ever'])
  })
  
  it(`splits the first parameter string into an array of strings by separating the string into substrings, using the second parameter, a single-character substring, to determine where to make each split.`, () => {
    expect(split('hi there', ' ')).toEqual(['hi', 'there'])
    expect(split('colin.jaffe.is.pretty.silly', '.')).toEqual(['colin', 'jaffe', 'is', 'pretty', 'silly'])
    expect(split('toysrus', 'r')).toEqual(['toys', 'us'])
  })
});

describe('trimStart', () => {
  it(`removes all spaces from the start of a string with spaces at the beginning`, () => {
    expect(trimStart('    what')).toBe('what')
  })

  it(`returns the string unchanged if there are no spaces at the beginning`, () => {
    expect(trimStart('the actual')).toBe('the actual')
  })

  it(`returns the string unchanged if there are spaces only at the end`, () => {
    expect(trimStart('heck   ')).toBe('heck   ')
  })

  it(`keeps the spaces at the end even if there are spaces at the beginning`, () => {
    expect(trimStart(' is going on here   ')).toBe('is going on here   ')
  })

  it(`returns an empty string unchanged`, () => {
    expect(trimStart('')).toBe('')
  })

  it(`turns a string of spaces into an empty string`, () => {
    expect(trimStart('   ')).toBe('')
  })
});

describe('trimEnd', () => {
  it(`removes all spaces from the end of a string with spaces at the end`, () => {
    expect(trimEnd('what    ')).toBe('what')
  })
  
  it(`returns the string unchanged if there are no spaces at the end`, () => {
    expect(trimEnd('the actual')).toBe('the actual')
  })
  
  it(`returns the string unchanged if there are spaces only at the beginning`, () => {
    expect(trimEnd('   heck')).toBe('   heck')
  })
  
  it(`keeps the spaces at the beginning even if there are spaces at the end`, () => {
    expect(trimEnd(' is going on here   ')).toBe(' is going on here')
  })
  
  it(`returns an empty string unchanged`, () => {
    expect(trimEnd('')).toBe('')
  })

  it(`turns a string of spaces into an empty string`, () => {
    expect(trimEnd('   ')).toBe('')
  })
});