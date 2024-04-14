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

getJSON('https://guia.liinkoo.com/api/',  function(err, data2) {
    
    if (err != null) {
        console.error(err);
    } else {
        
//var text = `Date: ${data.id}
//Time: ${data.nome_fantasia}
//Unix time: ${data.fone1}`
    var text ='';
    $.each(data2, function(key2, val2){
	   text+= key2 + '--' + val2.nome_fantasia + 'xxx';
	});
        console.log(text);



$('#user-list-search').keyup(function(){

            var searchField = $(this).val();
			if(searchField === '')  {
				$('#filter-records').html('');
				return;
			}
			
            var regex = new RegExp(searchField, "i");
/*            var output = '<div class="row">';
*/
            var output = '<ul class="list-group" id="user-list">';
			
            var count = 1;
			  $.each(data2, function(key, val){
				if ((val.tipo_estabelecimento.search(regex) != -1) || (val.nome_fantasia.search(regex) != -1)) {
                  output += '                        <li id="' + val.id + '" class="list-group-item" onclick="showdet(' + val.id + ')">';
                  output += '                            <div class="row">';
                  output += '                                <div class="col-md-12 col-12">';
                  output += '                                    <div class="row">';
                  output += '                                        <div class="col-md-4 col-4 user-img text-center pt-1">';
                  output += '                                            <img src=assets/images/"' + val.logo_empresa + '" alt="Seth Frazier" class="img-responsive img-circle rounded-circle" />';
                  output += '                                        </div>';
                  output += '                                        <div class="col-md-8 col-8">';
                  output += '                                            <h5 class="font-weight-bold mb-1">'+ val.nome_fantasia +'</h5>';
                  output += '                                            <div class="user-detail">';
                  output += '                                                <p class="m-0"><i class="fa fa-phone mr-1" aria-hidden="true"></i> '+ val.fone1 + '</p>';
/*                  output += '                                                <p class="m-0"><i class="fa fa-envelope mr-1" aria-hidden="true"></i> example@gmail.com</p>'; */
                  output += '                                            </div>';
                  output += '                                        </div>';
                  output += '                                    </div>';
                  output += '                                </div>';
                  output += '                            </div>';
                  output += '                        </li>';				  
				  if(count%2 == 0){
/*					output += '</div><div class="row">'
*/
				  }
				  count++;
				}
			  });
			  output += '</ul>';
			  $('#filter-records').html(output);
        });
		
    }
});

  });
