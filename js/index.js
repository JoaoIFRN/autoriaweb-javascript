let data = document.querySelector("#data");
let quantidade = document.querySelector("#quantidade");
let valor = document.querySelector("#valor");

let campos = [data,quantidade,valor];

let form = document.querySelector("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault(); 
    
    let tr = document.createElement("tr");
    campos.forEach((campo)=>{
        let td = document.createElement("td");
        td.textContent = campo.value;        
        tr.appendChild(td);
    });
    let total = campos[1].value * campos[2].value;
    let td = document.createElement("td");
    td.textContent = total;
    tr.appendChild(td);

    let tbody = document.querySelector("table tbody");
    tbody.appendChild(tr);
});

