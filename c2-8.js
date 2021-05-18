/* Promise, async/await */

const condition = true;
const promise = new Promise((resolve, reject)=>{ // 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
    if(condition){
        resolve('성공'); //성공 값
    }else{
        reject('실패'); //실패 값
    }
});

promise
.then((message)=>{ //resolve를 호출하면 결과를 반환
    console.log(message);
})
.catch((error)=>{ //reject를 호출하면
    console.error(error);
})



const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1,promise2]) // 여러 개의 프로미스를 동시에 실행
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.error(error);
});

Promise.allSettled([promise1,promise2]) // 실패한 것만 추려낼 수 있음



// async/await
// await은 reject가 없어서 try catch를 사용해야함
async function findAndSaveUser(Users){ // 프로미스를 간단하게 쓰는 방법 ,await을 쓰려면 함수에 async가 붙어야함
    let user = await Users.findOne({}); // await은 오른쪽에서 왼쪽으로 실행 await은 then 역할
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({gender:'m'});
}
