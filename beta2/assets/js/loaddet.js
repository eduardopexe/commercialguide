$(document).ready(function(){


var getJSON = function(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    
    xhr.onload = function() {
    
        var status = xhr.status;
        
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    
    xhr.send();
};

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const detid = urlParams.get('det')

const urlto = 'https://guia.liinkoo.com/api/detcom.php?iddet=' + detid

/* alert(urlto)*/

getJSON(urlto, function(err, data3) {
    
    if (err != null) {
        console.error(err);
    } else {
		

/* ler dados
alert('ok - ler dados!')
*/
     var output = '';
	 
     $.each(data3, function(key, val){
/*	    alert(data3.id) 
*/	    output += '<p align="center"><img src="assets/images/' + val.logo_empresa + '" width="64" heigth="64" alt="Logo" title="Logo"><font size="3">&nbsp;&nbsp;&nbsp;<b>' + val.nome_fantasia + '</b></font></p><ul class="container flex">';
        output += '<li class="item flex-item"><figure><a href="tel://' + val.fone1 + '" class="hide-search text-secondary" data-command="toggle-search" data-toggle="tooltip" data-placement="top" title="Toggle Search">';
	    output += '<img src="assets/images/ico-fone.png" alt="Fone" title="Fone"></a><figcaption><font color="black" size="1">Telefone</font></figcaption></figure></li>';
	    output += '<li class="item flex-item"><figure><a href=website.html?s=wzp&q="' + val.whatsapp + '" class="hide-search text-secondary" data-command="toggle-search" data-toggle="tooltip" data-placement="top" title="Toggle Search">';
	    output += '<img src="assets/images/ico-whatsapp.png" alt="Whatsapp" title="Whatsapp"></a><figcaption><font color="black" size="1">Whatsapp</font></figcaption></figure></li>';
        output += '<li class="item flex-item"><figure><a href="website.html?s=fb&q=' + val.facebook + '" class="hide-search text-secondary" data-command="toggle-search" data-toggle="tooltip" data-placement="top" title="Toggle Search">';
        output += '<img src="assets/images/ico-fb.png" alt="Facebook" title="Facebook"></a><figcaption><font color="black" size="1">Facebook</font></figcaption></figure></li>';
        output += '<li class="item flex-item"><figure><a href="website.html?s=insta&q=' + val.instagram + '" class="hide-search text-secondary" data-command="toggle-search" data-toggle="tooltip" data-placement="top" title="Toggle Search">';
        output += '<img src="assets/images/ico-instagram.png" alt="Instagram" title="Instagram"></a><figcaption><font color="black" size="1">Instagram</font></figcaption></figure></li>';
        output += '<li class="item flex-item"><figure><a href="website.html?s=web&q=' + val.website + '" class="hide-search text-secondary" data-command="toggle-search" data-toggle="tooltip" data-placement="top" title="Toggle Search">';
        output += '<img src="assets/images/ico-site.png" alt="Web Site" title="Web Site"></a><figcaption><font color="black" size="1">Website</font></figcaption></figure></li>';
        output += '<li class="item flex-item"><figure><a href="local.html?det=' + val.id + '" class="hide-search text-secondary" data-command="toggle-search" data-toggle="tooltip" data-placement="top" title="Toggle Search">';
        output += '<img src="assets/images/ico-location.png" alt="Endereço" title="Endereço"></a><figcaption><font color="black" size="1">Endere&ccedil;o</font></figcaption></figure></li>';
        output += '<li class="item flex-item"><figure><a href="ofertas.html?det=' + val.id + '" class="hide-search text-secondary" data-command="toggle-search" data-toggle="tooltip" data-placement="top" title="Toggle Search">';
        output += '<img src="assets/images/ico-ofertas.png" alt="Minha Figura" title="Fone"></a><figcaption><font color="black" size="1">Promo&ccedil;&otilde;es</font></figcaption></figure> </li>';

	});
    output += '</ul>';	 
    $('#contatos').html(output);	
	
     };
/*
####	
*/	

});

  });
