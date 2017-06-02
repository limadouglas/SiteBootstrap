function imagemPadrao(img){
	id = "img0" + img;
	document.getElementById(id).src = "_imagens/icone_navegacao_normal.png";
	//alert("entrou");
}

function imagemPersonalizada(img){
	id = "img0" + img; //img01
	document.getElementById(id).src = "_imagens/icone_navegacao_personalizado.png";
	//	alert("saiu");
}

function imagemConfPersonalizada(){
	document.getElementById("img07").src = "_imagens/icone_config_personalizado.png";
}

function imagemConfPadrao(){
	document.getElementById("img07").src = "_imagens/icone_config_normal.png";

}

function imagemSairPersonalizada(){      
	document.getElementById("img08").src = "_imagens/icone_sair_personalizado.png";
}

function imagemSairPadrao(){
	document.getElementById("img08").src = "_imagens/icone_sair_normal.png";
}

function corImgPersonalizada(img){
	//alert("vai");
	$("#li0"+img).css("background-color", "#03A9F4");
}

function corImgPadrao(img){
	$("#li0"+img).css("background-color", "#757575");
}

$(function () {
  $('[data-toggle="popover"]').popover({
  	animation:true,
  	delay:0,
  	html:true,
  	templete: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
  	placement:'right', 
  	trigger:'focus'
  })
})

$('#circulo01').circleProgress({
  value: 0.0,
  size: 120,
  fill: {
    gradient: ["#03A9F4", "#03A9F4"]
  }
});

$('#circulo02').circleProgress({
  value: 0.50,
  size: 120,
  fill: {
    gradient: ["#03A9F4", "#03A9F4"]
  }
});

$('#circulo03').circleProgress({
  value: 0.80,
  size: 120,
  fill: {
    gradient: ["#03A9F4", "#03A9F4"]
  }
});