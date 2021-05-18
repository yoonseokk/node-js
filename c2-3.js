/* var, const, let*/

if(true){ //블록
    var x = 3; //블록 스코프를 빠져나감 but function 스코프는 못 빠져나감
}// 블록
console.log(x);

if(true){ 
    const y = 3; //블록 스코프를 빠져나가지 못함
}
console.log(y);

const a = 3; //선언 후 변환 불가
a = '5'; //에러

const b = {name: 'zerocho'};
b.name = 'nerocho'; //가능

let c = 5; //변환 가능
c = 3;
c = 10;