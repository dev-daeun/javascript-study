/* rest parameter : 추가적인 매개변수들을 인자로 받을 때 */
function summation(one, two, ...numbers) {
    console.log("one: ", one);
    console.log("two: ", two);
    console.log("rest: ", numbers);

   console.log(one + two + numbers.reduce((total, num) => total + num, 0));
}

summation(1, 2, 3, 4, 5);
/*
one:  1
two:  2
rest:  [ 3, 4, 5 ]
15
*/