const determineFalsy = require('../src/determineFalsy')

test ('"" to  be a falsy value', () =>{
    expect(determineFalsy('')).toBe(true);
})

test ('0 to  be a falsy value', () =>{
    expect(determineFalsy(0)).toBe(true);
})

test ('undefined to  be a falsy value', () =>{
    expect(determineFalsy()).toBe(true);
})

test ('false to  be a falsy value', () =>{
    expect(determineFalsy(false)).toBe(true);
})

test ('NaN to  be a falsy value', () =>{
    expect(determineFalsy(NaN)).toBe(true);
})

test ('null to  be a falsy value', () =>{
    expect(determineFalsy(null)).toBe(true);
})

test ('true to  be a truthy value', () =>{
    expect(determineFalsy(true)).toBe(false);
})

console.log(determineFalsy(5))