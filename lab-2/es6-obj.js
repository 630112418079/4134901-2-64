let person = {
    firstName : "Win",
    lastName : "yuth",
    age :25,
    sex : "male",
    
    fullName : function () {
        return this.firstName+ " " + this.lastName;
    }
    }

    console.log(person);

    const p =person;
    p.age =10;
    console.log(p);

    person.age=20;
    console.log(person);
    console.log(person.fullName);
    console.log(person.fullName());

    //destructuring
    const{firstName,lastName, age: a, sex: s} =person;
    console.log(firstName);
    console.log(s);


//string
const s1 = "helloworld!!!!";
const s2 = "My name is Prayuth";
const name2 = "TU";
let concat = s1+s2+name2;
console.log(concat);
concat = `I 
        love 
        Thailand. ${s2} ${name2}
        
        `;
console.log(concat);

//speed Operator(...)
const A1 = [2,3,4];
const A2 = [5,6,7];
let comArr = [A1, A2];
console.log(comArr); 
comArr = [...A1,...A2];
console.log(comArr);

sum = (...numbs3) => {
    let total = " ";
    for ( value of numbs3)
    total += value;
    return total;
}
console.log(sum(comArr));