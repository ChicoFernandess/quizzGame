import {
    getCurrentCity, citys, comment, coments
} from "../models/main.js"

const city = getCurrentCity()
console.log(city)
//INTRODUZIR OS DADOS DA CIDADE NA PAGINA HTML
document.querySelector("#cityName").innerHTML = city.name;
document.querySelector("#txtDescription").innerHTML = city.desc
document.querySelector("#mapImg").src = city.imgLocation
document.querySelector("#imgCity").src = city.photo

//VOTAÇÃO DA CIDADE

const frmRating = document.querySelector("#frmRating")
let allComents = document.querySelector("#allComents")
let comentsZone = document.querySelector("#comentsZone")
renderRating();
renderComents();
//changeVote();
function renderRating(voted = ""){
let result = ""
let x = city.rating;
let position;
//Só apos de estra logado é que se pode votar
if(sessionStorage.getItem("loggedUser")){


for(let i = 0; i<x.length;i++){
//Verificar se já votou ou não
//Os nomes estarão na posição par do array
if(i%2 === 0){
    console.log(city.rating[i])
    if(city.rating[i] == sessionStorage.getItem("loggedUser")){
        position = i;   
        voted = true;
    }
}
}
if(voted == false){
result += ` 
<p id="voteTitle"> Dá Pontuação a esta cidade:</p>
<div class="row">
<select id="rating" class="form-control col-sm-4">
<option value="5">5</option>
<option value="4">4</option>
<option value="3">3</option>
<option value="2">2</option>
<option value="1">1</option>
</select>
<img class="col-sm-3"src="../img/star2.png" alt="">
<p class="col-sm-5">


</div>
<br>
<p id="VoteBtn" >
<button id="btnVote" type="submit" class="btn btn-success">Votar</button>
</p>
`
}
else{
    result += ` 
<p id="voted"> Já deste pontuação a esta cidade:</p>
<h5>${city.rating[position+1]} <img src="../img/star2.png" alt=""></h5>
<br>
<p id="ChangeBtn">
<button id="btnChange" type="button" class="btn btn-success">Alterar</button>
</p>`
}
frmRating.innerHTML = result;
}
}

//função para mudar o voto
function changeVote(){
    let x = city.rating;
    let position;
    for(let i = 0; i<x.length;i++){
        //Os nomes estarão na posição par do array
        if(i%2 === 0){
            if(city.rating[i] == sessionStorage.getItem("loggedUser")){
                position = i;
            }
            x.splice(position, 2)
        }
        
    }
    localStorage.setItem("citys", JSON.stringify(citys))
    renderRating()    
}




//Botão para votar
document.querySelector("#frmRating").addEventListener("submit", function(event){
    let rating = document.getElementById("rating").value;
    voteCity(sessionStorage.getItem("loggedUser"),rating);
})
//COMENTÁRIOS


function renderComents(){
    let result = ""; 
    let result1 = ""; 
    //Só apos de estar logado é que pode comentar
if(sessionStorage.getItem("loggedUser")){
    result1 += `
    <hr>
    <h3 class="rounded-circle col-sm-2">${sessionStorage.getItem("loggedUser")}</h3>
    <textarea id="comentsZone" class="form-control col-sm-7" rows="2" style="resize: none"  rows="3"></textarea>
    <p class="col-sm-1"></p>
    <button id="btnComent" type="button" class="btn btn-primary btn-lg col-sm-2">Comentar</button>
    `
} 

for (const coment of coments) {
    if(coment.city === city.name){
        result +=` 
        <hr>
        <div class="container">
            <h3>${coment.user}</h3> <p>${coment.coment}<p>
            <small id="dateComent" class="form-text text-muted">${coment.date} ${coment.hour}</small>
          </div>
          `
    }
    
}
allComents.innerHTML = result
comentsZone.innerHTML = result1
}
document.getElementById("btnComent").addEventListener("click", function(){
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear()
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const str_date = day + "/" + month + "/" + year
    const str_hour = hour + ":" + min + ":" + sec
    console.log(str_date)
    const text = document.querySelector("textarea").value
    console.log(text)
    console.log("oi")
    comment(sessionStorage.getItem("loggedUser"),text,str_date,str_hour,city.name)
    renderComents();
})


//Botão para alterar o voto
document.getElementById("btnChange").addEventListener("click",function(){
    changeVote();
})

/**
 * Função que introduz a votação no array
 * @param {string} username Nome do user
 * @param {int} rating Votação dada à cidade
 */
export function voteCity(username,rating){
    var rate = city.rating;
    rate.push(username,rating)
    localStorage.setItem("citys", JSON.stringify(citys))
    }

