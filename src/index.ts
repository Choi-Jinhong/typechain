class Human { // interface, class는 비슷한 기능을 하지만 상황에 따라서 사용하게 됨 (class: react와 같은 클래스가 필요할 때 사용, interface 대부분 사용)
    public name: string; //public , private이 있음
    public age: number;
    public gender: string;
    constructor(name:string, age:number, gender?:string) { // ?도 사용가능
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "famale");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}. you are a ${person.gender}`;
};

console.log(sayHi(lynn));

export {};