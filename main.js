function sleep(milliseconds) {
  var start = new Date().getTime();

  while(true) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

(function(console){

    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)

function exportaDados(){
	grade = document.getElementsByClassName("divAtividade ");
	total = grade.length;
	var dados = "<html>"
    dados +=    "\n\t<head>"
    dados +=    "\n\t\t<meta charset='UTF-8'>"
    dados +=    "\n\t\t</head>"
    dados +=    "\n\t<body>"
    dados +=    "\n\t\t<table border=1>"
    dados +=    "\n\t\t\t<tr>"
    dados +=    "\n\t\t\t\t<td>ID</td>"
    dados +=    "\n\t\t\t\t<td>Título</td>"
    dados +=    "\n\t\t\t\t<td>Descricao</td>"
    dados +=    "\n\t\t\t</tr>";
	for(i = 0; i < grade.length; i++){
		disc = grade.item(i);
        sigla = disc.getElementsByClassName("labelAtividade")[0].innerText;

		grade_exibeInformacoesAtividade(disc.id);
		menu = document.getElementById("divListaDadosAtividade");
		nome = menu.getElementsByClassName("fontLateral").item(0).innerText;
		descricao = menu.getElementsByClassName("fontLateral").item(1).innerHTML;

        dados += "\n\t\t\t<tr>";
		// dados += "\n\t\t\t\t<td>" + disc.id + "</td>";
		dados += "\n\t\t\t\t<td>" + sigla + "</td>";
		dados += "\n\t\t\t\t<td>" + disc.title + "</td>";
		dados += "\n\t\t\t\t<td>" + descricao + "</td>";
		dados += "\n\t\t\t</tr>";

		console.clear();
		console.log((i * 100/total).toFixed(2) + "% concluído.");
	}
    dados += "\n\t\t</table>\n\t</body>\n</html>";

	console.clear();
	console.log("100% concluído.");
	console.log("Salvando arquivo...");
	console.save(dados, "arquivo.html");
}
