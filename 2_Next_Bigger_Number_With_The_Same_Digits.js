// You have to create a function that takes a positive integer
// number and returns the next bigger number formed by the same digits:
//
// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071
// If no bigger number can be composed using those digits, return -1:
//
// nextBigger(9)==-1
// nextBigger(111)==-1
// nextBigger(531)==-1

function nextBigger(n) {
    var digits = ("" + n).split("").map(function(item) {
        return parseInt(item, 10);
    });
    var final = 0,
        swapper = 10,
        index = 0;

    if (digits.length === 1) {
        return -1;

    } else if (digits.length === 2) {
        if (digits[0] < digits[1]) {
            var temp = digits[0];
            digits[0] = digits[1];
            digits[1] = temp;
            return parseInt(digits.join(''), 10);
        }
    } else if (digits.length === 3) {
        var max = digits.reduce(function(a, b) {
            return Math.max(a, b);
        });
        var min = digits.reduce(function(a, b) {
            return Math.min(a, b);
        });

        function swap(index1, index2) {
            var temp = digits[index1];
            digits[index1] = digits[index2];
            digits[index2] = temp;
            return digits;
        }

        if (digits[0] === max) {
            if (digits[2] > digits[1]) {
                digits = swap(2, 1);
                return parseInt(digits.join(''), 10);
            }
        } else if (digits[0] === min) {
            if (digits[2] > digits[1]) {
                digits = swap(2, 1);
                return parseInt(digits.join(''), 10);
            } else {
                digits = swap(0, 2);
                digits = swap(2, 1);
                return parseInt(digits.join(''), 10);
            }
        } else {
            if (digits[2] > digits[1]) {
                digits = swap(2, 1);
                return parseInt(digits.join(''), 10);
            } else {
                digits = swap(1, 0);
                digits = swap(1, 2);
                return parseInt(digits.join(''), 10);
            }
        } else {
            for (var i = digits.length - 1; i > 0; i--) {
                if (digits[i - 1] < digits[i]) {
                    //Find which value to swap
                    for (var j = i; j < digits.length; j++) {
                        if (digits[i - 1] < digits[j] && swapper > digits[j]) {
                            swapper = digits[j];
                            index = j;
                        }
                    }

                    //Swap the values
                    var temp = digits[i - 1];
                    digits[i - 1] = swapper;
                    digits[index] = temp;

                    //Sort the right side of the swapped variable
                    digits = partialSortRightSide(digits, i);
                    final = parseInt(digits.join(''), 10);

                    if (final > n) {
                        return final;
                    }
                }
            }
        }
        return -1;
    }

    function partialSortRightSide(array, startingIndex) {
        var partialArray = [];

        for (var i = startingIndex; i < array.length; i++) {
            partialArray.push(array[i]);
        }

        partialArray.sort(function(a, b) {
            return a - b
        });

        for (var i = startingIndex; i < array.length; i++) {
            array[i] = partialArray[(i - startingIndex)];
        }
        return array;
    }
