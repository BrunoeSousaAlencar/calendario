now = new Date

semana = new Array("Domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")

mes = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")

document.getElementById("data").innerHTML = (now.getDate()+', ' + semana[now.getDay()]+'-feira , '+ mes [now.getDay()]+ " de " + now.getFullYear())





