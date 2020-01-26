import {
	questions3, users, choose3, ask3
} from "../models/main.js"        // importa o array questions para aqui

const myQuestions3 = document.querySelector("#myQuestions3")




renderQuestions();


function renderQuestions() {

	choose3();

	let result3 = ""
	
	
	


	for (const question of ask3) {

		if(question.level === "3")  {

   console.log("level3")
		// gerar estrutura

		result3 += `
	<div>
	<p id="question">${question.description}</p>
	<input type="radio" id="raBtn" value="${question.options[0]}" name="${question.id}">${question.options[0]}<br>     
	<input type="radio" id="raBtn" value="${question.options[1]}" name="${question.id}" >${question.options[1]}<br>
	<input type="radio" id="raBtn" value="${question.options[2]}" name="${question.id}">${question.options[2]}<br>
	<input type="radio" id="raBtn" value="${question.options[3]}" name="${question.id}">${question.options[3]}<br>
	<font size="1">Pontos : ${question.points}</font>
	
	</div>
	`
		// name=question.id diferencia as questoes pelo id para que quando selecionarmos o radio button nao tirar a opçao nas outras questoes

	    myQuestions3.innerHTML = result3;
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

for (const question of questions3) {  // para os valores de question.id , question.correctResponse serem reconhecidos temos de os meter sempre dentro deste tipo de for

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
		
		const respostaCorreta = questions3[i].correctResponse;
		
		
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
		pontos = 30 * contRight
		
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

})






    

	



    

	



