// 2. Crie uma variáveis que tenha apenas os usuários do sexo feminino e com mais de 18 anos - filter

const data = require("./data.js");



const fem = data.filter(user => user.age >= 19 && user.gender.includes("Female"));

console.table(fem);