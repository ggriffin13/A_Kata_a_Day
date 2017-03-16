/*******************************************************************************
 Day 7-2: 3/16/2017 - Pyramid Slide Down

 Pyramids are amazing! Both in architectural and mathematical sense. If you have
 a computer, you can mess with pyramids even if you are not in Egypt at the
 time. For example, let's consider the following problem. Imagine that you have
 a plane pyramid built of numbers, like this one here:

    /3/
   \7\ 4
  2 \4\ 6
 8 5 \9\ 3
 Here comes the task...

 Let's say that the 'slide down' is a sum of consecutive numbers from the top to
 the bottom of the pyramid. As you can see, the longest 'slide down'
 is 3 + 7 + 4 + 9 = 23

 Your task is to write a function longestSlideDown (in ruby: longest_slide_down)
 that takes a pyramid representation as argument and returns its'
 \longest 'slide down'. For example,
*******************************************************************************/
function longestSlideDown(pyramid) {
    for (var row = pyramid.length - 2; row >= 0; row--) {
        for (var col = 0; col < pyramid[row].length; col++) {
            pyramid[row][col] += Math.max(pyramid[row + 1][col], pyramid[row + 1][col + 1]);
        }
    }
    return pyramid[0][0];
}
