import {
	questions2, users, ask2, choose2
} from "../models/main.js"        // importa o array questions para aqui

const myQuestions2 = document.querySelector("#myQuestions2")




renderQuestions();


function renderQuestions() {

	choose2();

	let result2 = ""
	
	
	


	for (const question of ask2) {

		if(question.level === "2")  {

   console.log("level2")
		// gerar estrutura

		result2 += `
	<div>
	<img id="imagens2" src=${question.multimedia}></img>
	<p id="question">${question.description}</p>
	<input type="radio" id="raBtn" value="${question.options[0]}" name="${question.id}">${question.options[0]}<br>     
	<input type="radio" id="raBtn" value="${question.options[1]}" name="${question.id}" >${question.options[1]}<br>
	<input type="radio" id="raBtn" value="${question.options[2]}" name="${question.id}">${question.options[2]}<br>
	<input type="radio" id="raBtn" value="${question.options[3]}" name="${question.id}">${question.options[3]}<br>
	<font size="1">Pontos : ${question.points}</font>
	
	</div>
	`
		// name=question.id diferencia as questoes pelo id para que quando selecionarmos o radio button nao tirar a opçao nas outras questoes

	    myQuestions2.innerHTML = result2;
		}

		

}



	
}

let eu; // variavel que guarda o nome do user loggado
let p; // variavel que guarda o xp do user loggado

for (const user of users) {
		//console.log("user xp :" + user.xp)
		//console.log("username :" + user.username)

		eu = sessionStorage.getItem("loggedUser")
		p = sessionStorage.getItem("loggedPP")
		
		
		
        //console.log(p) // xp do user loggado
		//console.log(eu) // user loggado
				
}



let rates = [];

for (const question of questions2) {  // para os valores de question.id , question.correctResponse serem reconhecidos temos de os meter sempre dentro deste tipo de for

	//const optionshow = document.getElementsByName(question.id)[0].value
	//console.log(optionshow) // verifica se tou a receber o value certo
	//console.log(question.id)   // preciso de alterar os nossos names
	//console.log(question.correctResponse) // ver as respotas correctas para cada pergunta 

	rates.push(document.getElementsByName(question.id));
	
}


let rate_value;
let contRight = 0;  // contar as certas
let contWrong = 0;
let pontos = 0;   // pontuaçao final 
let numCorrect = 0; // mostrar quantas certas
let numWrong = 0;



finish.addEventListener("click", function () {
	for (let i = 0; i < rates.length; i++) {   // vai buscar o objeto que contem options a pergunta e as suas opçoes
		
		const respostaCorreta = questions2[i].correctResponse;
		
		
		for(let y in rates[i]) {      // vai a cada objeto e ver quais sao os valores de cada objeto para aassim os poder comparar vai mesmo buscar o valor literal
			if (rates[i][y].checked) {   // vai opçao a opçao ver qual esta checked
			
			rate_value = rates[i][y].value;
		
			if (rate_value == respostaCorreta) {
				contRight = contRight + 1
				
				console.log("boa")
				console.log("certas :" + contRight)
			}
			else {
				contWrong = contWrong + 1
				console.log("errado")
				console.log("erradas :" + contWrong)
			}
		}
		}
		numCorrect = contRight
		numWrong = contWrong
		pontos = 20 * contRight
		
		p = pontos
		


		console.log("pontos :" + pontos)
		//console.log(users.xp)
		console.log("Pontos de xp :" + p)

		resultados.innerHTML = pontos;
		correct.innerHTML = numCorrect;
		wrong.innerHTML = numWrong;	
	}

	for(var y in users){
		
		if(eu === users[y].username) {  // pegar no user que ta loggado 
			users[y].xp += p;    // pega no xp do user loggado e muda a xp
		}
	}

	localStorage.setItem("users", JSON.stringify(users))

	document.getElementById("finish").disabled = true;


	if(p == 50) {


		//########MODAL#######\\
		// Get the modal
	var modal = document.getElementById("myModal");
	
	// When the user clicks on the button, open the modal
	  modal.style.display = "block";
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
		modal.style.display = "none";
	  }
	} 
	
	
	} else if(p == 0 || p == 10 || p == 20){
	
		//########MODAL#######\\
		// Get the modal
		var modal = document.getElementById("myModal2");
	
		// When the user clicks on the button, open the modal
		  modal.style.display = "block";
		
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		} 
	
	} else if(p == 30 || p == 40) {
	
		//########MODAL#######\\
		// Get the modal
		var modal = document.getElementById("myModal3");
	
		// When the user clicks on the button, open the modal
		  modal.style.display = "block";
		
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		} 
	
	}

})






    

	



    

	



