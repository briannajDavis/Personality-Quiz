var tina = 0;
var gene = 0;
var louise = 0;
var teddy = 0;
var bob = 0;
var linda = 0;

var ans = 0;

var names = ["linda", "bob", "tina", "gene", "louise", "teddy"];

var result = document.getElementById("result");
var resultpic = document.getElementById("resultpic");

//question one
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

q1a1.addEventListener("click", winter);
q1a2.addEventListener("click", addTeddy);
q1a3.addEventListener("click", addTina);
q1a4.addEventListener("click", fall);

//question two
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

q2a1.addEventListener("click", coffee);
q2a2.addEventListener("click", addBob);
q2a3.addEventListener("click", addLouise);
q2a4.addEventListener("click", juice);

//question three
var q3a1 = document.getElementById("q3a1");//night
var q3a2 = document.getElementById("q3a2");//day

q3a1.addEventListener("click", night);
q3a2.addEventListener("click", day);

//question four
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");

q4a1.addEventListener("click", addGene);//sas
q4a2.addEventListener("click", addTina);//horse
q4a3.addEventListener("click", addLouise);//dragon
q4a4.addEventListener("click", addBob);//dog
q4a5.addEventListener("click", racoon);//racoon

var done = document.getElementById("done");
done.addEventListener("click", finished);

//question one specific
function winter() {
  addGene();
  addLinda();
}
function fall(){
  addLouise();
  addBob();
}
//question two specific
function coffee(){
  addTina();
  addTeddy();
}
function juice(){
  addLinda();
  addGene();
}
//question three specific
function day(){
  addTina();
  addGene();
  addBob();
  addTeddy();
}
function night(){
  addLouise();
  addLinda();
}
//question four specific
function racoon(){
  addTeddy();
  addLinda();
}


function addTina() { tina++; }
function addGene() { gene++; }
function addLouise() { louise++; }
function addLinda() { linda++; }
function addBob() { bob++; }
function addTeddy() { teddy++; }

function finished(){
  var totals = [];
  totals.push(linda);
  totals.push(bob);
  totals.push(tina);
  totals.push(gene);
  totals.push(louise);
  totals.push(teddy);

  
  var max = 0;

  for(let x = 0; x < totals.length; x++){
    if(totals[x] > max){
      max = totals[x];
      ans = x;
    }
  }
  updateResult();
}
function updateResult() {
  if (ans == 0) {
    result.innerHTML = "You are Linda";
    resultpic.innerHTML =
      "<img src = 'images/linda.jpeg'>";
  } else if (ans == 1){
    result.innerHTML = "You are Bob";
    resultpic.innerHTML =
      "<img src = 'images/bob.jpeg'>";
  } else if(ans == 2){
    result.innerHTML = "You are Tina";
    resultpic.innerHTML =
      "<img src = 'images/tina.jpg'>";
  } else if(ans == 3){
    result.innerHTML = "You are Gene";
    resultpic.innerHTML =
      "<img src = 'images/gene.jpeg'>";
  } else if(ans == 4){
    result.innerHTML = "You are Louise";
    resultpic.innerHTML =
      "<img src = 'images/louise.png'>";
  } else{
    result.innerHTML = "You are Teddy";
    resultpic.innerHTML =
      "<img src = 'images/ted.jpeg'>";
  }
  
}
q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
}

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);
q4a5.addEventListener("click", disableQ4);

function disableQ4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
  q4a5.disabled = true;
}

var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);

function restartQuiz(){
  result.innerHTML = "";
  resultpic.innerHTML = "";
  
  linda = 0;
  bob = 0;
  tina = 0;
  gene = 0;
  louise = 0;
  teddy = 0;
  
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
  q4a4.disabled = false;
  q4a5.disabled = false;

  (window).scrollTo(0,0);
}

