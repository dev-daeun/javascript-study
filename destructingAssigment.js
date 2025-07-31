console.log("-- 배열의 구조분해할당 --")

/* 배열의 구조분해할당 */
const arr = [1, 2, 3];
var [one, two, three] = arr;
console. log(one, two, three) // 1 2 3

var [one, two, three] = arr;
console.log(one, two) // 1 2

var [one, two, three, four] = arr;
console.log(one, two, three, four)  // 1 2 3 undefined

var [one, two, three, four = 4] = arr;
console.log(one, two, three, four)  // 1 2 3 4


console.log("-- 객체의 구조분해할당 --")
/* 객체의 구조분해할당 */
var cat = {
    name: "자두",
    age: 9,
    species: "cat",
}

var {name, age, species} = cat;
console.log(name, age, species); // 자두 9 cat


/* 분해한 속성을 다른 변수에 저장 가능 */
var {age : myAge} = cat;  
console.log(myAge); // 9


console.log("-- 구조분해할당을 함수 매개변수로 활용하기 --");

/* 배열의 분해할당을 함수 매개변수로 활용하기 */
const funcArr = ([one, two, three, four=4]) => {
    console.log(one, two, three, four);
}
funcArr(arr);

/* 객체 분해할당을 함수 매개변수로 활용하기 */
const funcObj = ({name, age, species, extra}) => {
    console.log(name, age, species, extra);  // 자두 9 cat undefined
}
funcObj(cat);
