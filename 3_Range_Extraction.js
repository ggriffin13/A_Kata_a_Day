/*******************************************************************************
 Day 3: 3/12/2017 - Range Extraction

 A format for expressing an ordered list of integers is to use a
 comma separated list of either individual integers
 or a range of integers denoted by the starting integer separated from the
 end integer in the range by a dash, '-'. The range includes all integers
 in the interval including both endpoints. It is not considered a range
 unless it spans at least 3 numbers. For example ("12, 13, 15-17")
 complete the solution so that it takes a list of integers in increasing order
 and returns a correctly formatted string in the range format.

 Example:
 solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
 returns "-6,-3-1,3-5,7-11,14,15,17-20"

*******************************************************************************/


function solution(list){
    var final = [];
    for (var i = 0; i < list.length; i++) {
        //check if the next element is the start of a range
        if (list[i] === list[i+1]-1 && list[i+1] === list[i+2]-1) {
            for (var j = i+2; j < list.length; j++) {
                if (list[j] !== list[j+1]-1) {
                    final.push(rangeConversion(list[i], list[j]));
                    i = j;
                }
                break;
            }
        } else {
            final.push(list[i].toString());
        }
    }
    return final.join();
}

function rangeConversion(a, b) {
    return a.toString() + "-" + b.toString();
}
