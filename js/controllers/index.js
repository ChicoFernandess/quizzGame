import{ 
    createUser,
    login,
    logout,
    users,
    setCurrentRegion
}from "../models/main.js"

update();

if (sessionStorage.getItem("loggedUser")) {
    // Apresentação do nome do utilizador autenticado
    document.querySelector("#loggedUser").innerHTML = `<a href="../html/userProfile.html">${sessionStorage.getItem("loggedUser")}</a>`
    // Clique no botão de logout
    document.querySelector("#btnLogout").addEventListener("click", function () {
        logout()
        location.reload()
    })
}
else{
//Fazer o login
document.querySelector("#frmLogin").addEventListener("submit", function (){
    const loginResult = login(
        document.querySelector("#txtUserLogin").value,
        document.querySelector("#txtPasswordLogin").value
    )
   
    if (loginResult == true){
        //Fechar janela modal
        $('#userModal').modal('hide')
        //Apresentação do user
        document.querySelector("#loggedUser").innerHTML= `<a href="#">${sessionStorage.getItem("loggedUser")}</a>`
    }
    else{
       // swal("Credenciais inválidas")

    }
})

//Clicar no botão Registar
document.querySelector("#frmRegister").addEventListener("submit", function(event){
    console.log("teste")
    const registerResult = createUser(
        document.querySelector("#txtUserRegister").value,
        document.querySelector("#txtPasswordRegister").value,
        "0",
        "https://www.shareicon.net/download/2016/06/25/786527_people_512x512.png",
        "0"
    )
    if(registerResult == true){
        //Fechar modal
        $('#modelRegister').modal('hide')
        //Apresentação do user
        document.querySelector("#loggedUser").innerHTML= `<a id="userName" href="#">${sessionStorage.getItem("loggedUser")}</a>`
    }
    event.preventDefault();

})
}

//Atualizar navbar
function update(){
    const nav = document.querySelector("nav");
    
    let result =""

    result =
    `    <a class="navbar-brand" href="../index.html">
    <img src="../img/NOME 2.png" alt="">
  </a>
  <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
    aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">INÍCIO <span class="sr-only">(current)</span></a>
      </li>
  <li class="nav-item active">
          <a class="nav-link" href="../html/catalog.html">CATÁLOGO</a>
        </li>`

  if(sessionStorage.getItem("loggedUser") && sessionStorage.getItem("loggedTypeUser") === "1"){
  result += `
  <li class="nav-item active">
  <a class="nav-link" href="../html/quizz.html">QUIZZES</a>
</li>
<li class="nav-item active">
  <a  class="nav-link" href="../html/adminOffice.html">ADMIN</a>
</li>
  <!-- Descrição do utilizador autenticado -->
  <div id="authButtons">
      <a id="loggedUser" href=""></a>
      <button id="btnLogout" class="btn btn-primary my-2 my-sm-0">
          Logout
      </button>
  </div>`
}
else if(sessionStorage.getItem("loggedUser")){     
  result +=
 ` <li class="nav-item active">
  <a class="nav-link" href="../html/quizz.html">QUIZZES</a>
</li>
<!-- Descrição do utilizador autenticado -->
<div id="authButtons">
    <a id="loggedUser" href="../html/userProfile.js"></a>
    <button id="btnLogout" class="btn btn-primary my-2 my-sm-0">
        Logout
    </button>
</div>`
}


  else{
      result +=       
      `<ul class="navbar-nav mr-auto"></ul>
      <div id="authButtons">
      <form class="form-inline my-2 my-lg-0">
      <button id="login" class="btn btn-primary my-2 my-sm-0" type="button" data-toggle="modal"
        data-target="#userModal">LOGIN/REGISTO</button>
        </form>
        </div>
    `

  }
  result +=`</div>`


  
  

  nav.innerHTML=result

}


// // bloquear ou desbloquear os botoes conforme a xp do utilizador             
    
if(sessionStorage.getItem("loggedPP") < 100){
  document.getElementById("lvl2").disabled = true;
  document.getElementById("lvl3").disabled = true;
} else if(sessionStorage.getItem("loggedPP") >= 100 && sessionStorage.getItem("loggedPP") < 1000) {
   document.getElementById("lvl2").disabled = false;
   document.getElementById("lvl3").disabled = true;
}else if(sessionStorage.getItem("loggedPP") >= 1000){
   document.getElementById("lvl3").disabled = false;	
}


