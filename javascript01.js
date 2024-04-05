// 자바스크립트 변수, 자료형, 함수, 조건문, 반복문

// 1. 변수
let creamRead = 'a';
const chocoBread ='b';

let camelCase;
let snake_case;
let PascalCase;
let $case;
let _case;

let bread = '빵';
let creamBread = '크림빵';
bread = creamBread
console.log(bread);
console.log('첫 번째 빵은 : ', bread);
console.log('두 번째 빵은 : ', '${bread}');


// 2. 자료형
/*
[1] 자료형의 기본 타입 : Number, Biglnt, String, Boolean, Symbol, Undefinde, Null
[2] 복합 타입 : Object, Function, Array
*/
let number = '10';  // 정수형
let biglnt = '10000000000000';
let string = '연습';  // 문자형
let boolean = true;  // 논리
let NullTypes = null;
let UndefinedTypes = undefined;

console.log(typeof(number));
console.log(typeof(biglnt));
console.log(typeof(string));
console.log(typeof(boolean));
console.log(typeof(NullTypes));
console.log(typeof(UndefinedTypes));


// 함수
/*
1) 기본 함수 종류 : 함수 선언식, 함수 표현식, 화살표 함수, 익명 함수, 즉시 실행 함수
2) 생성자 함수 :
3) 재귀 함수 :
4) Class : 
*/

// [1] 기본 함수 구조
function greet(name){
  consolee.log("hello + name");
}
greet("Lee") // -> 출력결과 hello Lee

// [2] 익명 함수
const greeter = function(name){
  console.log("hello + name");
}
greeter("Lee0") // -> 출력결과 hello Lee0

// [3] 화살표 함수
const greeter2 = (name) => {
  console.log("hello + name");
};
greeter2("Lee2") // -> 출력결과 hello Lee2


// 3. 조건문
// [1] if
let x = 10000; // 입장료
let age = 19;

if(age >= 70) { //70세 이상이면
  x = 0;  //입장료 0원
}
document.write("입장료" +  x + "원")

//[2] if ~ else
let num = 8;
if (num%2 == 0){
  document.write(num + ", 짝수.");
}
else{
  document.write(num + ", 홀수.");
}

// [3] switch
let SwichNum = 3;

switch(SwichNum){
  case"1":
    console.log("껌");
    break;
  case"2":
    console.log("사탕");
    break;
  default:
    console.log("쿠키");
    break;
}


// 4. 반복문
// [1] for
let sum = 0;
for (let i = 1; i<=10; i++){
  sum +=i;
}
document.write("합계 : " + sum);

// [2] while
let ssum = 0;
let i = 1;

while (i<=10){
  sum += i;
  i++;
}
document.write("합계 : " + sum);