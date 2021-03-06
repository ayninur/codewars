// Write a function called repeat_str which repeats the given string src exactly count times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////

function repeatStr(n, s) {
    return s.repeat(n);
}

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////

function repeatStr(n, s) {
    let str = '';
    for (let i = 0; i < n; i++) {    //iterate through n times
        str += s            //with each iteration add s to the string str
    }
    return str
}