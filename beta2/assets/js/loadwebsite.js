$(document).ready(function(){


const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const tiposite = urlParams.get('s')

const urlq = urlParams.get('q')

/* alert(urlto)*/

var url = '';

if (tiposite == 'fb'){
	
	url = 'https://fb.com/' + urlq;
	
}

if (tiposite == 'insta'){
	
	url = 'https://instagram.com/' + urlq;
	
}


if (tiposite == 'wzp'){
	
	url = 'https://wa.me/55' + urlq;
	
}
    
if (tiposite == 'website'){
	
	url = 'http://' + urlq;
	
}		

/* ler dados
alert('ok - ler dados!')
     var output = '';

*/
 
/*    $('#contatos').html(output);	
*/
    $("#contatos").load(url);
	
  });
