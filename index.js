const fs=require('fs');
fs.writeFileSync('./Test.txt','RAM IS GOOD BOY');

const result=fs.readFileSync('./contact.txt',"utf-8");
console.log(result);