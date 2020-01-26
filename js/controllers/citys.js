import{
    citys,
    setCurrentCity,
    sortCitys,
    getCurrentRegion,
    coments,
    moreVotedCitys,
    removeCity
} from "../models/main.js"

const myCatalog = document.querySelector("#myCatalog")
const btnFilter = document.querySelector("#btnFilter")
const btnSort = document.querySelector("#btnSort")
const btnMoreVoted = document.querySelector("#btnMoreVoted")
let totalComent = 0;
const region = getCurrentRegion();
renderCatalog();

btnFilter.addEventListener("click", function(){
    const txtCity = document.querySelector("#txtCity").value;
    //Chamar a função para renderizar o catalogo com estes valores
    renderCatalog(txtCity)
})

//Botão de ordenar por ordem alfabetica
btnSort.addEventListener("click", function(){
    sortCitys();
    renderCatalog();
})

//Botão para ordenar pelas mais votadas
btnMoreVoted.addEventListener("click", function(){
    moreVotedCitys();
    renderCatalog();
})


function renderCatalog(filterName = "") {

    let result = ""
    let i = 0;

    for (const city of citys) {
        let cityId = city.name.split(" ")[0]

        //Aplicar filtro de pesquisa
        if ((filterName !== "" && !city.name.startsWith(filterName))) {
            continue;
        }

        for (const coment of coments) {
            if (coment.city === city.name) {

                totalComent++
            }

        }
        //Comparar qual cidade corresponde á região selecionada
        if (region.name == city.region) {
            let totalPoints = 0;
            let mediaPoints = 0;
            let count = 0;
            let rate = city.rating
            // Corre o array rating da classe City
            for (let i = 0; i < rate.length; i++) {
                //Os nomes estarão na posição par do array
                if (i % 2 !== 0) {
                    totalPoints = totalPoints + parseInt(city.rating[i])
                    count++
                }
                mediaPoints = totalPoints / count
                mediaPoints = Math.round(mediaPoints);
            }
            //Criação da linha
            if (i % 3 === 0) {
                result += `<div class="row">`
            }



            //Geração do card
            result += `
    <div class="col-sm-4">
        <div class = "card">
            <img id="myDiv" src="${city.photo}" class="card-img-top">
            <div id="card" class="card-body">
                <h5 id="region" class="card-title">${city.name}</h5>
                <p id="country" class="card-text">${city.country}</p>
                <p id="points">${mediaPoints} <img src="../img/star2.png">/ ${totalComent}<img src="../img/comets.png"></p>
                `
            if (city.stage === 2 && sessionStorage.getItem("loggedPP")<100) {
                result += `<button id="${cityId}" class="btn btn-primary view disabled">Ver Mais</button>`
            } else if (city.stage === 3 && sessionStorage.getItem("loggedPP")<1000) {
                result += `<button id="${cityId}" class="btn btn-primary view" style="opacity:0.5">Ver Mais</button>`
            } else {
                result += `<button id="${cityId}" class="btn btn-primary view">Ver Mais</button>`
            }

            // Só adiciona botão de "Remover" a um utilizador autenticado
            if (sessionStorage.getItem("loggedUser") && sessionStorage.getItem("loggedTypeUser")=== "1") {
                result += `<button id = "${cityId}" class="btn btn-danger remove"> Remover </button>`
            }
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
            totalComent = 0
            //Atribuir todos os cards gerados ao elemeto com id myCatalog
            myCatalog.innerHTML = result;
        }



    }
    //Programar todos os botões ver mais
    const btnsSeeMore = document.getElementsByClassName("view")
    for (const elem of btnsSeeMore) {
        elem.addEventListener("click", function () {
            setCurrentCity(this.id)
        })
    }
        // Programar todos os botões remover
        const btnsRemove = document.getElementsByClassName("remove")
        console.log("remover")
        for (const elem of btnsRemove) {
            elem.addEventListener("click", function () {
                // O this.id é o valor do atributo id de cada elemento button
                removeCity(this.id)
            })
        }
}