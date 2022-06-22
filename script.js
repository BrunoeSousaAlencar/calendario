//formatar data padrão brasileiro
let data = new Date ();

function formatarData(data){
    let newDate = new Date(data);
    return `${newDate.getDate()} 0${newDate.getMonth()+1} ${newDate.getFullYear()}`;
}

document.getElementById('data').innerHTML = formatarData(data)







