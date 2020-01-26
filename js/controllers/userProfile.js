import{ 
    users,
    changePassword,
    changeAvatar
 }from "../models/main.js" 
 console.log("aqui pfv")
const userPage = document.querySelector("#containerUser")
let result= "";
let level = "";
for (const user of users) {
    if(user.username === sessionStorage.getItem("loggedUser")){
        if(user.xp<100){level = "Novato"}
        else if(user.xp<1000){level = "Intermédio"}
        else{level = "Experiente"}
    result += `
    <img id="imgUse" src="${user.avatar}" class="rounded-circle col-sm-2" alt="">
         
         <h1 id="userName">${user.username}</h1>
         <h4>${level}</h4>
         <h4>${user.xp} XP</h4>
         <br>
         <p id="btnChangePass"><button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalChangePass">
                Alterar Password
              </button>
            </p>
    `
}
    userPage.innerHTML = result
}
document.querySelector("#frmChangePass").addEventListener("submit", function(event){
    
    event.preventDefault()

    const newPass = document.querySelector("#txtNewPass").value;
    const confNewPass = document.querySelector("#txtConfNewPass").value;
    const oldPass = document.querySelector("#txtOldPass").value
    console.log(oldPass)
    if(newPass === confNewPass){
        changePassword(newPass,oldPass);
        
    }
    else{
        alert("Novas passwords não correspondem")
    }
})
document.querySelector("#frmChangeAvatar").addEventListener("submit",function(event){
    const newAvatar = document.querySelector("#txtNewAvatar")
    changeAvatar(newAvatar)
    event.preventDefault()
})
