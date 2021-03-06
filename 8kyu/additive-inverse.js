// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives






/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////

function invert(array) {
    return array.map(i => i < 0 ? Math.abs(i) : -Math.abs(i))
}

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////

function invert(array) {
    return array.map(i => i * -1)
}

/////////////////////////////////////////////
// SOLUTION 3
/////////////////////////////////////////////

function invert(array) {
    return array.map(i => -1)
}