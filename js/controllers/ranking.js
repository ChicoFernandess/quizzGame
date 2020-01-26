import {
    users,
    compareXP
} from "../models/main.js"


const myRanking = document.querySelector("#usersRank")


renderRankings();

function renderRankings(){
compareXP(); // chamda da funcao
  let i=1 // numeros de rankings
    let result3 = ""
    


    for(const user of users) {
        result3 += `
	<div>
	
    
    <style>
table, th, td {
  border: 2px solid green;
  
}
</style>

    <table style="width:50%">
  <tr>
    <th bgcolor="#A9A9A9">Nome</th>
    <th bgcolor="#FFFF00">XP</th> 
  </tr>
  <tr>
    <td bgcolor="#FFFFFF">${i}º - ${user.username}</td>
    <td bgcolor="#FFFFFF">${user.xp}</td>
  </tr>
</table>
	
  </div>
	`
		

        myRanking.innerHTML = result3;
  i++
        
    }

}
