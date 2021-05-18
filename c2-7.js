/* 클래스 */

class Human{
    constructor(type = 'human'){
        this.type = type;
    };
    static isHuman(human){
        return human instanceof Human;
    };

    breathe(){ // 인스턴스
        alert('h-a-a-a-m');
    }
}

class Zero extends Human{ // 상속
    constructor(type, firstName, lastName){
        super(type); // 부모 클래스에서 가져옴
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}