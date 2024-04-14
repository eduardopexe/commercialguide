(function($){
    $('.nav-toggle').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
    $('.nav-overlay').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
})(jQuery);

      // Test browser support
      window.SpeechRecognition = window.SpeechRecognition       ||
                                 window.webkitSpeechRecognition ||
                                 null;

                //caso nãsuporte esta API DE VOZ
                if (window.SpeechRecognition === null) {
                document.getElementById('unsupported').classList.remove('hidden');
        }else {
            var recognizer = new window.SpeechRecognition();
            var transcription = document.getElementById("user-list-search");

                //Para o reconhecedor de voz, nãparar de ouvir, mesmo que tenha pausas no usuario
                recognizer.continuous = true

                recognizer.onresult = function(event){
                        transcription.value = "Pesquisa por audio ativada....";
                        for (var i = event.resultIndex; i < event.results.length; i++) {
                                if(event.results[i].isFinal){
                                        transcription.value = event.results[i][0].transcript;
                                }else{
                                transcription.value += event.results[i][0].transcript;
                                }
                        }
                }

                document.querySelector("#rect").addEventListener("click",function(){
                        try {
                            recognizer.start();
                          } catch(ex) {
                                /*alert("error: "+ex.message); */
                          }
                });
        }

function showdet(idx) {
/*  alert(idx);
*/
  window.location.href="guialocal.html?det="+idx;
}

