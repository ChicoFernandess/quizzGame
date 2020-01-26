import{
    regions, setCurrentRegion
} from "../models/main.js"

const myCatalog = document.querySelector("#myCatalog")
renderCatalog();


function renderCatalog(filterName="", filterCountry=""){

    let result = ""
    let i = 0;
    for(const region of regions){
        if((filterName !== "" && !region.name.startsWith(filterName)) ||
        (filterCountry !== "" && region.country != filterCountry)){
            continue
    }
    //Criação da linha
    if(i % 3 === 0){
        result += `<div class="row">`
    }
    //Geração do card
    result += `
    <div class="col-sm-4">
        <div class = "card">
            <img id="imgRegion"src="${region.photo}" class="card-img-top">
            <div id="card" class="card-body">
                <h5 id="region" class="card-title">${region.name}</h5>
                <p id="country" class="card-text">${region.country}</p>
                <button id="${region.name}" class="btn btn-primary view">Ver Mais</button>
    `
            result += ` 
                    </div>
                </div>
            </div>
        `
            i++
            // Criação do fecho da linha
            if (i % 3 === 0) {
                result += `</div>`
            }
        }
        //Atribuir todos os cards gerados ao elemeto com id myCatalog
        myCatalog.innerHTML=result;

//Programar todos os botões ver mais
  // Programar todos os botões ver mais
  const btnsSeeMore = document.getElementsByClassName("view")
  for (const elem of btnsSeeMore) {
      elem.addEventListener("click", function () {
          setCurrentRegion(this.id)
          
  console.log(this.id)
      })
    }
}
