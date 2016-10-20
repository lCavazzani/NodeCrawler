var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var pageToVisit = "http://www.submarino.com.br/";
console.log("Visiting page " + pageToVisit);
request(pageToVisit, function(error, response, body) {
   if(error) {
     console.log("Error: " + error);
   }
   // Check status code (200 is HTTP OK)
   console.log("Status code: " + response.statusCode);
   if(response.statusCode === 200) {
     // Parse the document body
     var $ = cheerio.load(body);
     console.log("Nome:  " + $('a.prodTitle').text());//ver se consegue pegar qualquer TAG aqui
     console.log("Imagem:  " + $('div.prodImg').text());//ver se consegue pegar qualquer TAG aqui
     console.log("Valor:  " + $('span.salePrice').text());//ver se consegue pegar qualquer TAG aqui
   }
});
