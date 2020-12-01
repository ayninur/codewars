// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////

function boolToWord(bool) {
    if (bool) {
        return "Yes"
    } else {
        return "No"
    }
}

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////

function boolToWord(bool) {
    return bool ? "Yes" : "No"
}