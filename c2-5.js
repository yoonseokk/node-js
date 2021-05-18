/* 화살표 함수*/

function add1(x,y){
    return x+y;
}

const add2 = (x,y) => { // 화살표 함수
    return x+y;
};

const add3 = (x,y) => x+y; // 바로 return이 나오면 {} 생략 가능

const add4 = (x,y) => (x+y); // 헷갈리지 않게 괄호로 묶어줌




function not1(x){
    return !x;
}

const not2 = x=> !x; // 매개변수가 하나면 () 생략 가능


const obj = (x,y) => {
    return {x:x, y:y}; // {x:x, y:y}는 {x,y}로 생략 가능
};

const obj = (x,y) => {x, y} // {x, y}가 함수의 바디를 의미하는지 객체인지 알지 못함 (오류)

const obj = (x,y) => ({x, y}) //객체임을 알리기 위해 ()를 사용



var relationship1 = {
    name: 'zero',
    friends: ['nero','hero','xero'],
    logFriends: function(){ // function 마다 자신만의 this를 가짐
        var that = this;
        this.friends.forEach(function(friend){
            console.log(that.name,friend);
        });
    },
};
relationship1.logFriends();


const relationship2 = {
    name: 'zero',
    friends: ['nero','hero','xero'],
    logFriends(){
        this.friends.forEach(friend =>{ // 화살표 함수는 부모쪽의 this와 같다
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();


//function을 써야하는 경우

button.addEventListener('click',function(){
    console.log(this.textContent); // 버튼에 써있는 글자 출력
});

button.addEventListener('click',() => {
    console.log(this.textContent); //바깥쪽 this이므로 실행 오류
});

button.addEventListener('click',(e) => {
    console.log(e.textContent); //e를 사용해야 정상 실행
});