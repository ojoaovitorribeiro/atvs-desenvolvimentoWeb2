// 3. Crie uma variável que procura por um usuário que more na cidade chamada Monroe - find

const data = require("./data.js");



const city = data.filter(user => user.address.city.includes("Monroe"));

console.table(city);