//topo do calendário
now = new Date

semana = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")

mes = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")

document.getElementById("mes").innerHTML = (mes[now.getMonth()])

console.log(now.getMonth())

document.getElementById("data").innerHTML = (now.getDate()+ ", " + semana[now.getDay()]+" de " + now.getFullYear())
//fim do calendário

// dias da semana
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

//fim dias da semana

// que dia é hoje
let diaMes = 0
if (mes[now.getMonth() -1] =='junho' || mes[now.getMonth() -1] =='setembro' || mes[now.getMonth() -1] =='novembro' || mes[now.getMonth() -1] =='abril')
    diaMes = 30
if (mes[now.getMonth() -1] =='janeiro' || mes[now.getMonth() -1] =='dezembro' || mes[now.getMonth() -1] =='março' || mes[now.getMonth() -1] =='outubro' || mes[now.getMonth() -1] =='maio' || mes[noMogetMonth() -1] =='agosto' || mes[now.getMonth() -1] =='julho'){
    diaMes = 31
}
if(mes[now.getMonth() -1] =='fevereiro'){
    diaMes = 28
}

let days = "";
for (let i = 1; i <= diaMes; i++){
    days += `<div>${i}</div>`;
    document.querySelector('.days').innerHTML = days
}
