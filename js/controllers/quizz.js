import {
	questions, users, choose, ask
} from "../models/main.js"        // importa o array questions para aqui

const myQuestions = document.querySelector("#myQuestions")


renderQuestions();

function renderQuestions() {
	
	
	choose();
	

	let result4 = ""
	
	for (const question of ask) {

		

		if(question.level === "1")  {

   console.log("level1")
		// gerar estrutura

		
		result4 += `
	<div>
	<br>
	<p id="question"><b>${question.description}</b></p>
	<label class="container1">
	<input type="radio" id="raBtn" value="${question.options[0]}" name="${question.id}">${question.options[0]}
	<span class="checkmark"></span>
	</label>
	<label class="container1">  
	<input type="radio" id="raBtn" value="${question.options[1]}" name="${question.id}">${question.options[1]}
	<span class="checkmark"></span>
	</label>
	<label class="container1">
	<input type="radio" id="raBtn" value="${question.options[2]}" name="${question.id}">${question.options[2]}
	<span class="checkmark"></span>
	</label>
	<label class="container1">
	<input type="radio" id="raBtn" value="${question.options[3]}" name="${question.id}">${question.options[3]}
	<span class="checkmark"></span>
	</label>
	<font size="1">Pontos : ${question.points}</font>
	<br>
	
	</div>
	`
		// name=question.id diferencia as questoes pelo id para que quando selecionarmos o radio button nao tirar a opçao nas outras questoes

	    myQuestions.innerHTML = result4;
		}

		

}

	console.log(ask)
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

for (const question of questions) {  // para os valores de question.id , question.correctResponse serem reconhecidos temos de os meter sempre dentro deste tipo de for

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
		
		const respostaCorreta = questions[i].correctResponse;
		
		
		for(let y in rates[i]) {      // vai a cada objeto e ver quais sao os valores de cada objeto para aassim os poder comparar vai mesmo buscar o valor literal
			if (rates[i][y].checked) {   // vai opçao a opçao ver qual esta checked
			
			rate_value = rates[i][y].value;
		
			if (rate_value == respostaCorreta) {
				contRight = contRight + 1
			}
			else {
				contWrong = contWrong + 1
			}
		}
		}
		numCorrect = contRight
		numWrong = contWrong
		pontos = 10 * contRight
		
		p = pontos
		
		resultados.innerHTML = pontos;
		correct.innerHTML = numCorrect;
		wrong.innerHTML = numWrong;	
	}

	for (const user of users) {

		if(eu === user.username) {  // pegar no user que ta loggado 
			user.xp += p;    // pega no xp do user loggado e muda a xp
		}
		localStorage.setItem("users", JSON.stringify(users))
	}

	document.getElementById("finish").disabled = true;


if(p == 50) {


	//########MODAL#######\\
	// Get the modal
let modal = document.getElementById("myModal");

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
	let modal = document.getElementById("myModal2");

	resultados.innerHTML = pontos;
		correct.innerHTML = numCorrect;
		wrong.innerHTML = numWrong;	

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
	let modal = document.getElementById("myModal3");

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






    

	



    

	




