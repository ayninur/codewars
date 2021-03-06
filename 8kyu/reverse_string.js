// Complete the solution so that it reverses the string passed into it.

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////

function solution(str) {
    return str.split('').reverse().join('');
}

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////

const solution = s => [...s].reverse().join('')