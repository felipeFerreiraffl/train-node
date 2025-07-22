import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

// Objeto URL - todas as informações osbre essa url
const urlObj = new URL(urlString);
console.log(urlObj);

// Pega uma URL e transforma em uma string novamente
console.log(url.format(urlObj));

// Busca de um parâmetro de uma URL
const params = new URLSearchParams(urlObj.search);
console.log(params.get("q"));

// Adicionar mais parâmetros
params.append("limit", "5");
console.log(params);
