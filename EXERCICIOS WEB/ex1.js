// 1. Crie uma variável que contenha todas as idades (age) dos usuário - map

const data = require("./data.js");

const idade = data.map(user => user.age);

console.table(idade);

// console.table(data);