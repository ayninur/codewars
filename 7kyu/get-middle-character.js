// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

///////////////////////////////////////////////////////////////
// SECTION 1
///////////////////////////////////////////////////////////////

function getMiddle(s) {
    let median = s.length / 2
    return s.length % 2 === 0 ? s.slice(median - 1, median + 1) : s.charAt(median)
}

///////////////////////////////////////////////////////////////
// SECTION 2
///////////////////////////////////////////////////////////////

function getMiddle(s) {
    return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

///////////////////////////////////////////////////////////////
// SECTION 3
///////////////////////////////////////////////////////////////

