/* 템플릿 문자열, 객체 리터럴 */

var won = 1000;
var result = '이 과자는' + won + '원입니다.';
//이 과자는1000원입니다.

const result = `이 과자는 ${won}원입니다.`;
//이 과자는 1000원입니다.

function a(){}
a();
a``;//tag가 달린 템플릿 문자열

//객체 리터럴

const sayNode = function(){
    console.log('Node');
}
const es = 'ES';
const newObject = {
    sayJS(){//function을 따로 써주지 않아도 사용가능
        console.log('JS');
    },
    sayNode,//key, value가 같으면 한번만
    [es + 6]: 'Fantastic',// 동적 속성명을 객체 속성명으로 사용 가능
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);
