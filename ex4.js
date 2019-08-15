// 4. Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos
const data = require("./data.js");
// FOR EACH
const mult = data.find(user => user.nome + 2 * user.age de idade && user.age <= 50 ? true : false);
console.table(mult);