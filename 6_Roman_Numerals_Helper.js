/*******************************************************************************
 Day 6: 3/15/2017 - Roman Numerals Helper Object

 Create a RomanNumerals helper that can convert a roman numeral to and from an
 integer value. The class should follow the API demonstrated in the examples
 below. Multiple roman numeral values will be tested for each helper method.

 Modern Roman numerals are written by expressing each digit separately starting
 with the left most digit and skipping any digit with a value of zero. In Roman
 numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is
 written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in
 descending order: MDCLXVI.

Examples:

RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
*******************************************************************************/
var RomanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,

    toRoman: function(num) {
        var roman = '',
            i;
        for (i in RomanNumerals) {
            while (num >= RomanNumerals[i]) {
                roman += i;
                num -= RomanNumerals[i];
            }
        }
        return roman;
    },
    fromRoman: function(roman) {
        var numbers = roman.split('');
        var total = 0,
            i;

        for (i = 0; i < numbers.length; i++) {
            if (RomanNumerals[numbers[i]] < RomanNumerals[numbers[i + 1]]) {
                total += RomanNumerals[numbers[i + 1]] - RomanNumerals[numbers[i]];
                i++;
            } else {
                total += RomanNumerals[numbers[i]];
            }
        }
        return total;
    }
};
