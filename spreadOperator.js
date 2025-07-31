/* spread == 흩뿌린다 */


console.log("-- 배열 스프레드 --")
/* 배열 스프레드 */
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2) // 4 1 2 3 5 6


console.log("-- 객체 스프레드 --")
/* 객체 스프레드 */
let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};
console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }


console.log("-- 스프레드 연산자를 함수 인자로 활용하기 --")
/* 스프레드 연산자를 함수 인자로 활용하기 */
function funcArr(one, two, three) {
    console.log(one, two, three);
}
funcArr(...arr1);  // 1 2 3
