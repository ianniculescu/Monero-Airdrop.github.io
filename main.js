const countries = ["Burundi","Suriname","Irak","Iran","Nigeria","Sierra Leone","France","Usa"];
const button = document.getElementById("button");
const p = document.getElementById("country");


function getRndInteger(min,max){
  return Math.floor(Math.random()*(max-min))+min;
}

function main(){
  button.addEventListener('click', function(){
  console.log(countries[getRndInteger(0,countries.length)]);
  p.innerHTML = countries[getRndInteger(0,countries.length)];

  });
}

main();