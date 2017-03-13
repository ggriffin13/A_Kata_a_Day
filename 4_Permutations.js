/*******************************************************************************
 Day 4: 3/13/2017 - Permutations

 In this kata you have to create all permutations of an input string and remove
 duplicates, if present. This means, you have to shuffle all letters from the
 input in all possible orders.

 Examples:

 permutations('a'); // ['a']
 permutations('ab'); // ['ab', 'ba']
 permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
                          ['0123', '0213', '0231', '2013', '2031', '2301']
*******************************************************************************/
function permutations(str) {
    var chars = str.split("");
    var permutations = [],
        stack = [];

    function findPermutation() {
        if(chars.length == 0) {
            permutations.push(stack.slice());
        }
        for (var i = 0; i < chars.length; i++) {
            var x = chars.splice(i, 1);
            stack.push(x);
            findPermutation();
            stack.pop();
            chars.splice(i, 0, x);
        }
    }
    findPermutation();
    for (var i = 0; i < permutations.length; i++) {
        permutations[i] = permutations[i].join('');
    }
    permutations.sort();
    for (var i = 0; i < permutations.length; i++) {
        if (permutations[i] === permutations[i-1]) {
            permutations.splice(i, 1);
            i--;
        }
    }
    return permutations;
}
