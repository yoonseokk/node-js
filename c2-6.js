 /* 구조분해 할당 */

 const example = {a:123, b: { c: 135, d: 146 }};
 const a = example.a;
 const d = example.b.d;

 const{a, b: { d }} = example; // 객체는 key가 같게 설정
 console.log(a); // 123
 console.log(d); // 146


 arr = [1,2,3,4,5];
 const x = arr[0];
 const y = arr[1];
 const z = arr[4];

 const [x,,,y,z] = arr; // 배열은 자리에 맞게 설정


 const candyMachine ={
     status:{
         name: 'node',
         count: 5,
     },
     getCandy(){
         this.status.count--;
         return this.status.count;
     },
 };
 const {getCandy, status:{count}} = candyMachine; //this가 있으면 구조분해 할당시 문제 발생