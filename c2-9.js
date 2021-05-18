/* 프론트엔드 자바스크립트 */

/* AJAX 요청 시 Axios 라이브러리를 사용하는게 편함

html 
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
</script>
*/

axios.get('https://www.zerocho.com/api/get') //프로미스를 지원하는지 확인해서 사용
.then((result)=>{ //성공
    console.log(result);
    console.log(result.data);
})
.catch((error)=>{ //실패
    console.error(error);
});

//await으로 바꾸면

(async ()=>{
    try{
        const result = await axios.get('https://www.zerocho.com/api/get');
        console.log(result);
        console.log(result.data);
    }catch(error){
        console.error(error);
    }
})();


(async ()=>{
    try{
        const result = await axios.post('https://www.zerocho.com/api/post/json',{ //post는 서버에 데이터를 같이 보낼 수 있는 요청 ex) 로그인, 회원가입
            name: 'zerocho',
            birth: 1994,
        });
        console.log(result);
        console.log(result.data);
    }catch(error){
        console.error(error);
    }
})();


/* HTML form 태그에 담긴 데이터를 AJAX 요청으로 보내고 싶은 경우 FormData 객체를 이용*/

(async ()=>{
    try{
        const formData = new FormData();
        formData.append('name', 'zerocho');
        formData.append('birth', 1994);
        const result = await axios.post('https://www.zerocho.com/api/post/formdata',formData);
        console.log(result);
        console.log(result.data);
    }catch(error){
        console.error(error);
    }
})();

//encodeURIComponent, decodeURIComponent
// 노드를 encodeURIComponentgkaus %EB%85%B8%EB%93%9C 가 됨, 서버에서 decodeURIComponent로 한글 해석
(async ()=>{
    try{
        const result = await axios.get(`https://www.zerocho.com/api/search/${encodeURIComponent('노드')}`); //주소에 한글이 들어가면 오류가 날 수 있기 때문에 encodeURIComponent로 감싸줌
        console.log(result);
        console.log(result.data);
    }catch(error){
        console.error(error);
    }
})();


//data attribute와 dataset

/*자바스크립트에서 태그.dataset.속성명으로 접근 가능
data-user-job -> dataset.userJob
data-idd -> dataset.id

반대로 자바스크립트 dataset에 값을 넣으면 data-속성이 생김
dataset.monthSalary = 10000 -> data-month-salary="10000"
*/