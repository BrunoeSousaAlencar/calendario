//topo do calendário
now = new Date

semana = new Array ("Domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")

mes = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")

document.getElementById("mes").innerHTML = (mes [now.getDay()])

document.getElementById("data").innerHTML = (now.getDate()+" " + semana[now.getDay()] + '-feira' + " de " + now.getFullYear())
//fim do calendário

// dias do mês
hoje = now.getDay()

if( hoje == 0 )
    document.getElementById("dom").innerHTML = ("#####")

if( hoje == 1 )
    document.getElementById('sex').style.backgroundColor = "#85C8F2";
    document.getElementById('sex').style.borderRadius = '5px';

if( hoje == 2 )
    document.getElementById('sex').style.backgroundColor = "#85C8F2";
    document.getElementById('sex').style.borderRadius = '5px';

if( hoje == 3 )
    document.getElementById('sex').style.backgroundColor = "#85C8F2";
    document.getElementById('sex').style.borderRadius = '5px';

if( hoje == 4 )
    document.getElementById('sex').style.backgroundColor = "#85C8F2";
    document.getElementById('sex').style.borderRadius = '5px';

if( hoje == 5 )
    document.getElementById('sex').style.backgroundColor = "#85C8F2";
    document.getElementById('sex').style.borderRadius = '5px';
    
if( hoje == 6 )
    document.getElementById('sex').style.backgroundColor = "#85C8F2";
    document.getElementById('sex').style.borderRadius = '5px';





















//fim do dia do mês