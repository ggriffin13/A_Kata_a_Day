/*******************************************************************************
 Day 8: 3/17/2017 - Adding Big numbers

 We need to sum big numbers and we require your help.

 Write a function that returns the sum of two numbers. The input numbers are
 strings and the function must return a string.

 Example
 add("123", "321"); -> "444"
 add("11", "99"); -> "110"

 Notes
  The input numbers are big.
  The input is a string of only digits
  The numbers are positives

*******************************************************************************/


function add(a, b) {
    if (parseInt(a) == 0 || parseInt(b) == 0) {
        return '0';
    }

    a = a.split('').reverse();
    b = b.split('').reverse();
    var result = [];

    for (var i = 0; (a[i] >= 0) || (b[i] >= 0); i++) {
        var sum = (parseInt(a[i]) || 0) + (parseInt(b[i]) || 0);

        if (!result[i]) {
            result[i] = 0;
        }

        var next = ((result[i] + sum) / 10) | 0;
        result[i] = (result[i] + sum) % 10;

        if (next) {
            result[i + 1] = next;
        }
    }

    return result.reverse().join('');
}
