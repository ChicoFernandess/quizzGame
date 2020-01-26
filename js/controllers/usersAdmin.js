import {
    users
} from "../models/main.js"


const myUsers = document.querySelector("#usersList")
const logUser = sessionStorage.getItem("loggedUser")

renderUsers();


function renderUsers(){
 // chamda da funcao
   // numeros de rankings
    let result44 = ""
    


    for(const user of users) {
        result44 += `
	<div>
	
    
    <style>
table, th, td {
  border: 2px solid green;
  
}
</style>

    <table style="width:50%">
  <tr>
    <th >Nome</th>
    <th >Password</th> 
  </tr>
  <tr>
    <td bgcolor="#FFFFFF">${user.username}</td>
    <td bgcolor="#FFFFFF">${user.password}</td>
  </tr>
</table>
	
  </div>
	`
		

        myUsers.innerHTML = result44;
  
        
    }

}



//funcao para apagar o utilizador
document.querySelector("#frmDeleteUser").addEventListener("submit", function (event) {
    const deleteUser = document.querySelector("#deleteUser").value
    let userIndex = 0

    if (deleteUser === logUser) {
        alert("Não podes apagar a tua própria conta")
    } else {
        for (const user of users) {
            userIndex++;
            if (deleteUser === user.username) {
                users.splice(userIndex - 1, 1);
                localStorage.setItem("users", JSON.stringify(users))
                renderUsers();
            }
        }
    }
    event.preventDefault();
})

