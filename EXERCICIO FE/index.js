
var cesta = document.getElementById("cesta");
var func = document.getElementById("func");


function entregar() {
    var valor = cesta.options[cesta.selectedIndex].text
    var value = func.options[func.selectedIndex].text
   
    let card = document.createElement("div");
    card.className = "card";

    let cestaa = document.createElement("p");

    cestaa.style.margin = "0 auto";

    cestaa.innerHTML = valor;

    let funcionario = document.createElement("p");

    funcionario.innerHTML = value;

    let data = new Date();
    let calend = data.getDate() +"/"+ (data.getMonth()+1) +"/"+ data.getFullYear() +" "+ data.getHours() +":"+ data.getMinutes() +":"+ data.getSeconds();
    let date = document.createElement("p");
    date.innerHTML = calend;

    card.appendChild(cesta);
    card.appendChild(funcionario);
    card.appendChild(date);
    body.appendChild(card);

}
