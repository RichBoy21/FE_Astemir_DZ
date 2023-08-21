1

function repeatStr (n, s) {
  let result = ''
  for(let i = 0; i < n ; i++){
    result += s
  }
 return result 
}


2

function removeChar(str){
return str.slice(1,-1)
};

3

let s = "sdf sdf   d   e";

function noSpace(x) {
  return x.replace(/ /g, "");
}
console.log(noSpace(s));


4.

function abbrevName(name){
const words = name.split(' ')
  const toUpper = words.map((el)=> el[0].toUpperCase()).join('.') 
return toUpper
}

5

const stringToNumber = function(str){
  return parseInt(str)
  return null;
}.

6.

function digitize(n) {
  return n.toString().split('').map(Number).reverse() 
}

7.

function greetings(string) {
  return string;
}
const str = "hello world!";
console.log(greetings(str));

8.

function booleanToString(b){
    return b ? 'true' : 'false';
}

