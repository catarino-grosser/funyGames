var credito = 0;
			var aux = 0;
			var aposta = 1;
			var nSort = 0;
			var slt1, slt2, slt3, slt4;
			
			function aleatorio(inferior,superior){ 
				numPossibilidades = superior - inferior; 
				aleat = Math.random() * numPossibilidades;
				aleat = Math.floor(aleat);
				return parseInt(inferior) + aleat;
			}
			
			function apostaMenos() {
				if (aposta > 1) {
					aposta--;
					document.getElementById('aposta').value = 'R$ ' + aposta;					
				}
				
			}
			
			function apostaMais() {
				if (aposta < 10) {
					aposta ++;
					document.getElementById('aposta').value = 'R$ ' + aposta;
				}
			}
			
			function verificaPremio() {
				//verifica se ganhou algum premio
				
				//inicio dos premios menores
				if (slt1 == 1 && slt2 == 2 && slt3 == 3 && slt4 == 4){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}

				if (slt1 == 1 && slt2 == 2 && slt3 == 4 && slt4 == 3){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 1 && slt2 == 3 && slt3 == 2 && slt4 == 4){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 1 && slt2 == 3 && slt3 == 4 && slt4 == 2){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 1 && slt2 == 4 && slt3 == 2 && slt4 == 3){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 1 && slt2 == 4 && slt3 == 3 && slt4 == 2){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 2 && slt2 == 1 && slt3 == 3 && slt4 == 4){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}

				if (slt1 == 2 && slt2 == 1 && slt3 == 4 && slt4 == 3){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 2 && slt2 == 3 && slt3 == 1 && slt4 == 4){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 2 && slt2 == 3 && slt3 == 4 && slt4 == 1){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 2 && slt2 == 4 && slt3 == 1 && slt4 == 3){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 2 && slt2 == 4 && slt3 == 3 && slt4 == 1){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
					
				if (slt1 == 3 && slt2 == 2 && slt3 == 1 && slt4 == 4){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}

				if (slt1 == 3 && slt2 == 2 && slt3 == 4 && slt4 == 1){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 3 && slt2 == 1 && slt3 == 2 && slt4 == 4){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 3 && slt2 == 1 && slt3 == 4 && slt4 == 2){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 3 && slt2 == 4 && slt3 == 2 && slt4 == 1){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 3 && slt2 == 4 && slt3 == 1 && slt4 == 2){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}

				if (slt1 == 4 && slt2 == 2 && slt3 == 3 && slt4 == 1){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}

				if (slt1 == 4 && slt2 == 2 && slt3 == 1 && slt4 == 3){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 4 && slt2 == 3 && slt3 == 2 && slt4 == 1){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 4 && slt2 == 3 && slt3 == 1 && slt4 == 2){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 4 && slt2 == 1 && slt3 == 2 && slt4 == 3){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				
				if (slt1 == 4 && slt2 == 1 && slt3 == 3 && slt4 == 2){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 2);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
				}
				//fim dos premios menores
				
				//inicio dos premios maiores
				if (slt1 == 1 && slt2 == 1 && slt3 == 1 && slt4 == 1){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 6);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 6 + ".");
				}
				
				if (slt1 == 2 && slt2 == 2 && slt3 == 2 && slt4 == 2){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 5);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 5 + ".");
				}
				
				if (slt1 == 3 && slt2 == 3 && slt3 == 3 && slt4 == 3){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 3);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 3 + ".");
				}
				
				if (slt1 == 4 && slt2 == 4 && slt3 == 4 && slt4 == 4){
					aposta = parseInt(aposta);
					credito = credito + (aposta * 4);
					document.getElementById('credito').value = 'R$ ' + credito;
					window.alert("Parabêns, você ganhou um prêmio de R$ " + aposta * 4 + ".");
				}
				//fim dos pr�mios maiores
			}
			
			function jogar() {
				if (credito < 1 || credito < aposta) {
					aux = window.prompt("Coloque mais creditos, digite a quantidade em R$:","1");
					aux = parseInt(aux);
					credito = parseInt(credito);
					credito = credito + aux;
					document.getElementById('credito').value = 'R$ ' + credito
				}
				else {
					if(credito > 0 && credito >= aposta){
						credito = credito - aposta;
						document.getElementById('credito').value = 'R$ ' + credito;
						document.getElementById('escud1').src = 'roleta.gif';
						document.getElementById('escud2').src = 'roleta.gif';
						document.getElementById('escud3').src = 'roleta.gif';
						document.getElementById('escud4').src = 'roleta.gif';
						
						//processamento do slot1
						nSort = aleatorio(1,5);
						switch (nSort) {
							case 1:
							cont=setTimeout("document.getElementById('escud1').src = 'diamante.jpg'", 4000);
							slt1 = 1;
							break;
							case 2:
							cont=setTimeout("document.getElementById('escud1').src = 'sete.jpg'", 4000);
							slt1 = 2;
							break;
							case 3:
							cont=setTimeout("document.getElementById('escud1').src = 'coracao.jpg'", 4000);
							slt1 = 3;
							break;
							case 4:
							cont=setTimeout("document.getElementById('escud1').src = 'trevo.jpg'", 4000);
							slt1 = 4;
							break;
						}
						
						//processamento do slot2
						nSort = aleatorio(1,5);
						switch (nSort) {
							case 1:
							cont=setTimeout("document.getElementById('escud2').src = 'diamante.jpg'", 6000);
							slt2 = 1;
							break;
							case 2:
							cont=setTimeout("document.getElementById('escud2').src = 'sete.jpg'", 6000);
							slt2 = 2;
							break;
							case 3:
							cont=setTimeout("document.getElementById('escud2').src = 'coracao.jpg'", 6000);
							slt2 = 3;
							break;
							case 4:
							cont=setTimeout("document.getElementById('escud2').src = 'trevo.jpg'", 6000);
							slt2 = 4;
							break;
						}
						
						//processamento do slot3
						nSort = aleatorio(1,5);
						switch (nSort) {
							case 1:
							cont=setTimeout("document.getElementById('escud3').src = 'diamante.jpg'", 7000);
							slt3 = 1;
							break;
							case 2:
							cont=setTimeout("document.getElementById('escud3').src = 'sete.jpg'", 7000);
							slt3 = 2;
							break;
							case 3:
							cont=setTimeout("document.getElementById('escud3').src = 'coracao.jpg'", 7000);
							slt3 = 3;
							break;
							case 4:
							cont=setTimeout("document.getElementById('escud3').src = 'trevo.jpg'", 7000);
							slt3 = 4;
							break;
						}
						
						//processamento do slot4
						nSort = aleatorio(1,5);
						switch (nSort) {
							case 1:
							cont=setTimeout("document.getElementById('escud4').src = 'diamante.jpg'", 8000);
							slt4 = 1;
							break;
							case 2:
							cont=setTimeout("document.getElementById('escud4').src = 'sete.jpg'", 8000);
							slt4 = 2;
							break;
							case 3:
							cont=setTimeout("document.getElementById('escud4').src = 'coracao.jpg'", 8000);
							slt4 = 3;
							break;
							case 4:
							cont=setTimeout("document.getElementById('escud4').src = 'trevo.jpg'", 8000);
							slt4 = 4;
							break;
						}
						cont=setTimeout("verificaPremio()", 9000);
					}
				}
			}