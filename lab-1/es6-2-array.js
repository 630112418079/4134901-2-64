//Array

const characters = ["Naruto", "Goku", "Luffy"];
const villages =[];
villages[4] = "Konoha";
villages[1] = "Grandline";

console.log(characters);
console.log(villages);

const cities = new Array("Buriram",31000);
console.log(cities[1]);

//Array method
let character = characters.pop();
console.log(characters);
characters.push("Midoriya");
console.log(characters);
characters.shift("Tigermask");
console.log(characters);
characters.unshift("Conan");
console.log(characters);

const jpcharacters  = characters.slice(1,3);
console.log(jpcharacters);
characters.splice(1,1, "Gundam", "perman");
console.log(characters);

const mixArr = characters.concat(villages);
console.log(mixArr);
const mixString = mixArr.toString();
console.log(mixString);

for(let value of mixArr){
    console.log(value);
}

console.log(mixArr.length);
for(let index of mixArr.keys()) {
    console.log(index);
}

let text = "";
mixArr.forEach(conString);
console.log(text);
function conString(value, index ,array) {
    text += value + ":";

}

const numbs = [10,20,15,5,2];
const numbs2 = numbs.map(multi2);
console.log(numbs2)

function multi2(value, index , array) {
    return value *3;
}
const over15 = numbs2.filter(over15fn)

function over15fn(value) {
    return value >15;
    
    }

    let sum = numbs.reduce(addNumbs);
    console.log(sum);
    function addNumbs(total,value) {

        return total + value;

    }
    let over10 = numbs.every(over10fn);
    console.log(over10);

    function over10fn(value) {
        return value > 10;
    }


    let someOver10 = numbs.some(over10fn);
    console.log(someOver10);

    let first = numbs.find(over10fn);
    console.log(first);

let firstIndex = numbs.findIndex(over10fn);
console.log(firstIndex);

const alphabet = "ABCDEF";
let arrrAlph =Array.from(alphabet);
console.log(arrrAlph);