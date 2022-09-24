

import data from './quotes.json' assert { type: "json" };
var link = document.createElement('link');
// set the attributes for link element
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../style.css';


let q = document.getElementById("quote")
let a = document.getElementById("author")

// let rnd = Math.floor(Math.random() * data.quotes.length);

// q.innerHTML = data.quotes[rnd].quote 
// a.innerHTML = "~ " + data.quotes[rnd].author


function loadQuote(){
    let rnd = Math.floor(Math.random() * data.quotes.length); 
    q.animate
    q.innerHTML = data.quotes[rnd].quote 
    a.innerHTML = "~ " + data.quotes[rnd].author
    
}
setInterval(loadQuote,5000)









