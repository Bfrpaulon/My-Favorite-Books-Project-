   // Defina a data final da oferta 
   var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime(); 
          
   // Atualiza a contagem a cada 1 segundo 
   var x = setInterval(function() { 
   
     // Obtém a data/hora atual 
     var now = new Date().getTime(); 
     
     // Encontra a distância entre agora e a data final da oferta 
     var distance = countDownDate - now; 
     
     // Calcula os dias, horas, minutos e segundos 
     var days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
     var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
     
     // Exibe o resultado 
     document.getElementById("countdown").innerHTML = hours + "h " 
     + minutes + "m " + seconds + "s "; 
     
     // Se a contagem chegar a zero, exibe a mensagem "Oferta encerrada" 
     if (distance < 0) { 
       clearInterval(x); 
       document.getElementById("countdown").innerHTML = "Oferta encerrada"; 
     } 
   }, 1000); 