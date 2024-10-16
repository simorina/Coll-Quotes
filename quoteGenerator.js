


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
let data;
fetch('https://raw.githubusercontent.com/AtaGowani/daily-motivation/refs/heads/master/src/data/quotes.json')
.then(response => {
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return response.json();
})
.then(data => {
    console.log(data);
    
    function loadQuote(){
        let rnd = Math.floor(Math.random() * data.length); 
        q.animate
        q.innerHTML = data[rnd].quote 
        a.innerHTML = "~ " + data[rnd].author
        
    }
    setInterval(loadQuote,5000)
})
.catch(function () {
    this.dataError = true;
})











