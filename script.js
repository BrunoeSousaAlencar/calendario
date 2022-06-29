charset="UTF-8";

//topo do calendário
now = new Date

semana = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")

mes = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")

document.getElementById("mes").innerHTML = (mes[now.getMonth()])

console.log(now.getMonth())

document.getElementById("data").innerHTML = (now.getDate()+ ", " + semana[now.getDay()]+" de " + now.getFullYear())
//fim topo do calendário

//semana
hoje = now.getDay()

if( hoje == 0 )
    document.getElementById("dom").innerHTML = ("#85C8F2")
    document.getElementById('dom').style.borderRadius = '5px';
if( hoje == 1 )
    document.getElementById('seg').style.backgroundColor = "#85C8F2";
    document.getElementById('seg').style.borderRadius = '5px';

if( hoje == 2 )
    document.getElementById('ter').style.backgroundColor = "#85C8F2";
    document.getElementById('ter').style.borderRadius = '5px';

if( hoje == 3 )
    document.getElementById('qua').style.backgroundColor = "#85C8F2";
    document.getElementById('qua').style.borderRadius = '5px';

if( hoje == 4 )
    document.getElementById('qui').style.backgroundColor = "#85C8F2";
    document.getElementById('qui').style.borderRadius = '5px';

if( hoje == 5 )
    document.getElementById('sex').style.backgroundColor = "#85C8F2";
    document.getElementById('sex').style.borderRadius = '5px';
    
if( hoje == 6 )
    document.getElementById('sab').style.backgroundColor = "#85C8F2";
    document.getElementById('sab').style.borderRadius = '5px';

//fim semana

// quantidade dias do mês
let diaMes = 0
if (mes[now.getMonth() -1] =='junho' || mes[now.getMonth() -1] =='setembro' || mes[now.getMonth() -1] =='novembro' || mes[now.getMonth() -1] =='abril'){
    diaMes = 30
}
if (mes[now.getMonth() -1] =='janeiro' || mes[now.getMonth() -1] =='dezembro' || mes[now.getMonth() -1] =='março' || mes[now.getMonth() -1] =='outubro' || mes[now.getMonth() -1] =='maio' || mes[getMonth() -1] =='agosto' || mes[now.getMonth() -1] =='julho'){
    diaMes = 31
}
if(mes[now.getMonth() -1] =='fevereiro'){
    diaMes = 28
}

let days = "";
for (let i = 1; i <= diaMes; i++){
    days += `<div>${i}</div>`;
    document.querySelector('.days').innerHTML = "5"+ days
}
// fim quantidade dias do mês


//botoes do mês
function depois(){
    document.getElementById('mes').innerHTML = mes[now.getMonth()+1]
}

function antes(){
    mes[now.getMonth()]
    document.getElementById('mes').innerHTML = mes[now.getMonth()-1]
}











//fim botoes do mês
