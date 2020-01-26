import User from "./users.js"
import Region from "./catalog.js"
import City from "./city.js"
import Coments from "./coments.js"
import Question from "./questions.js"


let randomIndexesOfQuestions = []
export let ask = [];
export let ask2 = [];
export let ask3 = [];

//#####################REGIONS####################
 //Defenir array para guaradar as regiões
 export let regions = []

 if (localStorage.regions){
     regions = JSON.parse(localStorage.regions)
 }
 else{
     //Só vai entrar aqui a primeira vez
    const region1 = new Region("Norte", "Portugal","data:image/jpeg;base64,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")
    const region2 = new Region("Centro", "Portugal", "../img/centro.png")
    const region3= new Region("Sul", "Portugal", "../img/sul.png")
    regions.push(region1, region2, region3)
    localStorage.setItem("regions", JSON.stringify(regions))
    
}
//#######################CITYS######################
export let citys = []

if (localStorage.citys){
    citys = JSON.parse(localStorage.citys)
}
else{
    const city1 = new City("Guimarães","Norte","Portugal","../img/Guimarães.png","É uma cidade portuguesa situada no Distrito de Braga, região do Norte e sub-região do ave .Tem uma população de 54 097 habitantes.Guimarães é uma das mais importantes cidades históricas do país, sendo o seu centro histórico considerado Património Cultural da Humanidade.Esta cidade é muitas vezes designada como Cidade Berço, devido ao facto de aí ter sido estabelecido o centro administrativo do Condado Portucalense por D. Henrique e por seu filho D. Afonso Henriques.",
    "",[],1)
    const city2 = new City("Porto","Norte","Portugal","../img/Porto.png","Localizado a Norte de Portugal, é capital de distrito e é banhado pelo rio Douro, onde se encontram uma das suas imagens de marca, os barcos rabelo que traziam as pipas do vinho do Porto do Alto Douro para o Porto e Gaia. Tem uma população de cerca de 214 mil habitantes. Porto foi considerado o melhor destino europeu em 2018 e o segundo melhor do mundo em 2019.",
    "../img/PortoMapa.png",[],1)
    const city3 = new City("Lisboa","Sul","Portugal","../img/Lisboa.png","É a capital de Portugal e a cidade mais populosa do país com uma população de 506 892 habitantes, localizada na margem direita do Estuário do Tejo. É considerada como cidade global devido à sua importância em aspetos financeiros, comerciais, mediáticos, artísticos, educacionais e turísticos.Lisboa é, também, uma cidade repleta de espaços verdes, de variadas dimensões. Foi nesta que surgiu o primeiro jardim botânico português: Jardim Botânico da Ajuda. Para além do jardim botânico, existem, em Lisboa, mais de uma centena de parques, jardins, quintas e tapadas, entre eles:Parque Eduardo VII; Parque Florestal de Monsanto; o Jardim Botânico de Lisboa; o Jardim da Estrela e a Tapada da Ajuda. O Parque Florestal de Monsanto é o maior e mais importante parque da cidade, apelidado de Pulmão Verde."
    ,"",[],1)
    const city4 = new City("Faro","Sul","Portugal","../img/Faro.png","Faro é uma cidade portuguesa com cerca de 47 000 habitantes, capital do Distrito de Faro, da região, sub-região e ainda da antiga província do Algarve. Através do Aeroporto de Faro, a cidade constitui a terceira maior entrada externa do país.O concelho de Faro é delimitado a sul pela Ria Formosa, loca com grande potencial para turismo. A gastronomia local, as praias de areia branca e águas premiadas com bandeira azul são alguns aspetos a descobrir nesta cidade. Para além disto, tem também uma marina atraente, parques e praças bem cuidados e a parte antiga da cidade cheia de cafés ao ar livre e zonas pedestres. Além dos seus museus e belas igrejas e capelas.","",
    [],1)
    const city5 = new City("Braga","Norte","Portugal","../img/Braga.png","O distrito de Braga é um distrito português pertencente à província tradicional do Minho. Tem uma população residente de 848 185 habitantes.A cidade de Braga, por ser uma das cidades cristãs mais antigas do mundo, possui um vasto património religioso.Do seu património evidencia-se o Santuário do Sameiro, a Basílica de São Martinho do Dume e Capela de São Frutuoso. Entre estes pode-se, ainda, evidenciar o Santuário do Bom Jesus do Monte, que foi um dos nomeados a Património da Humanidade."
    ,"",[],2)
    const city6 = new City("Viana do Castelo","Norte","Portugal","../img/Viana.png","É uma cidade portuguesa, capital do distrito com o mesmo nome, na região do Norte, e integrada na sub-região do Alto Minho. Tem uma população de 85 445 habitantes. Ao longo desta cidade cresce o rio Lima e fora do centro da cidade, em posição dominante no alto do Monte de Santa Luzia, destaca-se a Igreja do Sagrado Coração de Jesus ou de Santa Luzia.","",[],2)
    const city7 = new City("Vila Real","Norte","Portugal","../img/VilaReal.png","É uma cidade portuguesa e capital do Distrito de Vila Real, situada na Região Norte e subregião do Douro e na antiga província de Trás-os-Montes e Alto Douro, com cerca de 51850 habitantes.Crescida num planalto situado na junção dos rios Corgo e Cabril, a cidade está enquadrada numa bela paisagem natural (Escarpas do Corgo), tendo como pano de fundo as serras do Alvão e, mais distante, do Marão.","",[],3)
    const city8 = new City("Bragança","Norte","Portugal","../img/Bragança.png","Bragança é uma cidade portuguesa, capital de distrito, na região de Trás-os -Montes e conta com 35 341 habitantes. Esta cidade divide-se em duas zonas: a Terra Fria com planaltos e serras, vales profundos e estreitos, de clima rude e onde se produz, centeio, batata e castanha; e a Terra Quente com micro clima mediterrâneo, onde se cultiva a oliveira, a amendoeira, a figueira, a vinha e o sobreiro. Tem, também, para visitar o Parque Natural de Montesinho, o Parque do Douro Internacional ou o Parque Natureza do Azibo.","",[],3)
    const city9 = new City("Aveiro","Centro","Portugal","../img/Aveiro.png","Aveiro é uma cidade na costa oeste portuguesa, situada na região Centro e com cerca de 55 000 habitante. Foi fundada junto a uma laguna conhecida como Ria de Aveiro. Distingue-se pelos seus canais navegados por barcos coloridos (barcos moliceiros), tradicionalmente utilizados para a colheita de algas. Não muito longe do centro encontra-se a Sé de de Aveiro e o Museu de Aveiro.","",[],1)
    const city10 = new City("Viseu","Centro","Portugal","../img/Viseu.png","Viseu é uma cidade portuguesa, situada na província da Beira Alta, com cerca de 66000 habitantes. No Adro da Sé, um dos principais locais de interesse do centro histórico, podemos encontrar para além da Sé e dos Museus, a Igreja da Misericórdia, o pelourinho e o Passeio dos Cónegos. A Catedrla de Viseu, é também um excelente ponto de partida de visita da cidade. Num raio de 100 km da cidade encontram-se locais como o Vale do Douro, a bonita Serra da Estrela, os Passadiços do Paiva e a Mata Nacional do Buçaco.","",[],1)
    const city11 = new City("Guarda","Centro","Portugal","../img/Guarda.png","A guarda é a mais alta cidade portuguesa e conta com cerca de 42 541 habitantes. Toda a região é marcada pelo granito, pelo clima contrastado de montanha e pelo seu ar puro e frio- Implantada na paisagem montanhosa da Serra da Estrela e com vários vestígios de ocupação humana desde a pré-história, pode-se encontrar nesta cidade o concelho de Fornos de Algodres, que conserva alguns dos mais importantes vestígios arqueológicos da Beira.","",[],2)
    const city12 = new City("Coimbra","Centro","Portugal","../img/Coimbra.png","","Coimbra é uma cidade portuguesa, situada na Beira Litoral e conta com cerca de 2,3 milhões de habitantes, sendo a maior cidade do centro de Portugal. Coimbra é uma cidade historicamente universitária, por causa da Universidade de Coimbra, uma das mais antigas da Europa e das maiores de Portugal. As duas margens de Coimbra são banhadas pelo rio Mondego, proveniente da Serra da Estrela. É considerada uma das mais importantes cidades portuguesas, devido a infraestruturas, organizações e empresas nela instaladas para além da sua importância histórica e privilegiada posição geográfica no centro de Portugal continental, entre as cidades de Lisboa e do Porto",[],2)
    const city13 = new City("Castelo Branco","Centro","Portugal","../img/CasteloBranco.png","Castelo Branco tem cerca de 34000 habitantes, situa-se na Beira Baixa e é sede de distrito e de um dos maiores concelhos do País, no centro de uma vasta região planáltica, entre as bacias dos rios Pônsul e Ocresa. Castelo Branco possui velhos solares fidalgos, ricas igrejas, amplas ruas e belos jardins. Um dos produtos típicos da região são as colchas de linho bordadas com fio de seda natural, conhecidas como bordado de Castelo Branco. Igualmente importante é a tradição Gastronómica desta região da Beira Baixa, desde sempre apreciada pela sua riqueza e diversidade, relacionada com a história.","",[],3)
    const city14 = new City("Leiria","Centro","Portugal","../img/Leiria.png","Leira conta com 126 897 habitantes e banhada pelos rios Lis e o seu afluente, o Lena, sendo o castelo de Leiria o seu monumento mais notável. Com uma gastronomia variada e com tradições reconhecidas, o concelho é historicamente rico, como o testemunham o castelo da cidade e o Santuário de Nossa Senhora da Encarnação. Leiria dispõe ainda, dentro do município, das Termas de Monte Real, de praias como a do Pedrógão, da Lagoa da Ervideira e da mata municipal de Marrazes. ","",[],3)
    const city15 = new City("Santarém","Sul","Portugal","../img/Santarém.png","É uma cidade portuguesa, situada na província do Ribatejo e na região do Alentejo, com 29 929 habitantes no seu perímetro urbano. Outrora conhecida como a capital do gótico em Portugal, no centro histórico de Santarém são vários os estilos arquitetónicos que estão presentes em cada rua.","",[],2)
    const city16 = new City("Portalegre","Sul","Portugal","../img/Portalegre.png","Portalegre é uma cidade portuguesa, capital do distrito de Portalegre, situada na região do Alentejo, sub-região do Alto Alentejo, com 15 374 habitantes. É a cidade capital de distrito com menos população em Portugal e a maior cidade do seu distrito. Portalegre é uma cidade serena, repleta de arquitectura barroca e castelos medievais. Partilha a sua localização com a imponente Serra de São Mamede, entre Portugal e Espanha e impõese com a sua paisagem singular formada por campos ondulados da sub-região do Alto Alentejo.","",[],2)
    const city17 = new City("Setúbal","Sul","Portugal","../img/Setúbal.png","Cidade portuguesa com cerca de 100 000 habitantes, faz parte da Área Metropolitana de Lisboa. Na cidade em que nasceram vultos da cultura portuguesa, banhada pelo Rio Sado, merecem especial referência o Convento de Jesus em estilo gótico-manuelino que alberga o Museu da Cidade e o Forte de São Filipe. De destacar são também as excelentes praias nomeadamente a Figueirinha, Galapos e o Portinho da Arrábida.","",[],2)
    const city18 = new City("Évora","Sul","Portugal","../img/Évora.png","Évora é uma cidade portuguesa, na região do Alentejo,, com 49 252 habitantes. O seu centro histórico bem-preservado é um dos mais ricos em monumentos de Portugal, o que lhe vale o título de Cidade-Museu. Em 1986, o centro histórico da cidade foi declarado Património Mundial pela UNESCO.","",[],3)
    const city19 = new City("Beja","Sul","Portugal","../img/Beja.png","Beja é uma cidade portuguesa pertencente à região do Alentejo com cerca de 23 400 habitantes. É uma cidade tranquila e muito acolhedora. Tem um bonito centro amuralhado e sedutores lugares interessantes a pouca distância a pé entre eles. Está localizada no coração de uma zona turística regional conhecida como Planície Dourada por se encontrar rodeada por um mar decampos de trigo, que a pouco e pouco têm dado lugar a vinhas e a olivais.","",[],3)
    citys.push(city1,city2,city3,city4,city5,city6,city7,city8,city9,city10,city11,city12,city13,city14,city15,city16,city17,city18,city19)
    localStorage.setItem("citys", JSON.stringify(citys))
}
//#######################USERS#####################
//Array para guardar users
export let users = []

if(localStorage.users){
    users = JSON.parse(localStorage.users)
}
else{
    const user1 = new User("admin","123",1,0,"1")
    const user2 = new User("DeusDosQuizzes","123",1000,0,"0")
    users.push(user1,user2);
    localStorage.setItem("users",JSON.stringify(users))
}

//#####################COMENTS#####################
export let coments = []
if(localStorage.coments){
    coments = JSON.parse(localStorage.coments)
}
else{
    const coment1 = new Coments("rui","OI",0,0,"Porto")
    coments.push(coment1);
    localStorage.setItem("coments",JSON.stringify(coments))
}

//####################QUIZZ#########################
// perguntas nivel 1
export let questions = []

if (localStorage.questions){
	questions = JSON.parse(localStorage.questions)
}

else {

	const question1 = new Question (
	"1",
	"Qual é a capital de Portugal?",
	["Porto","Lisboa","Braga","Guimarães"],
    "Lisboa",
	"10",
    "",
    "1"
	)

	const question2 = new Question(
	"2",
	"Que cidade é conhecida como cidade invicta?",
	["Viseu","Évora","Santarém","Porto"],
    "Porto",
	"10",
    "",
    "1"
	)

	const question3 = new Question(
	"3",
	"Que cidade é conhecida como cidade berço de Portugal?",
	["Braga","Leiria","Guimarães","Bragança"],
    "Guimarães",
	"10",
    "",
    "1"
    )

    const question31 = new Question(
    "31",
    "Qual é a capital do Minho?",
    ["Porto","Guimarães","Braga","Vila-Real"],
    "Braga",
    "10",
    "",
    "1"
    )

    const question32 = new Question(
    "32",
    "Quantos habitantes tem a cidade do Porto?",
    ["214349","200350","210323","215000"],
    "214349",
    "10",
    "",
    "1"
    )

    const question33 = new Question(
    "33",
    "Em que cidade nasceu o primeiro rei de Portugal?",
    ["Porto","Lisboa","Guimarães","Bragança"],
    "Guimarães",
    "10",
    "",
    "1"
    )


    const question34 = new Question(
     "34",
    "Os barcos do rabelo são uma caracteristica de que cidade?",
    ["Porto","Lisboa","Guimarães","Bragança"],
    "Porto",
    "10",
    "",
    "1"
    )

    const question35 = new Question(
    "35",
    "Qual destas cidades fica no Algarve?",
    ["Porto","Faro","Guimarães","Bragança"],
    "Faro",
    "10",
    "",
    "1"
    )

    const question36 = new Question(
    "36",
    "Qual destas cidades fica no centro de Portugal?",
    ["Porto","Faro","Aveiro","Bragança"],
    "Aveiro",
    "10",
    "",
    "1"
    )

    const question37 = new Question(
    "37",
    "Qual a cidade mais antiga de Portugal?",
    ["Braga","Faro","Aveiro","Bragança"],
    "Braga",
    "10",
    "",
    "1"
    )

    
    questions.push(question1,question2,question3,question31,question32,question33,question34,question35,question36,question37)
	localStorage.setItem("questions", JSON.stringify(questions))

}

// perguntas nivel 2
export let questions2 = []

if (localStorage.questions2){
	questions2 = JSON.parse(localStorage.questions2)
}

else {

	const question21 = new Question (
	"21",
	"Em que cidade fica este lugar?",
	["Porto","Setubal","Viana do Castelo","Guimarães"],
    "Viana do Castelo",
	"20",
    "../img/Viana.png",
    "2"
	)

	const question22 = new Question(
	"22",
	"Qual é a cidade dos estudantes?",
	["Coimbra","Évora","Santarém","Portalegre"],
    "Coimbra",
	"20",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Royal_Palace%2C_Universidade_de_Coimbra_%2810249002256%29.jpg/300px-Royal_Palace%2C_Universidade_de_Coimbra_%2810249002256%29.jpg",
    "2"
	)

	const question23 = new Question(
	"23",
	"Qual destas cidades fica na região do Alentejo?",
	["Arouca","Leiria","Guimarães","Portalegre"],
    "Portalegre",
	"20",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/LocalPortalegre.svg/800px-LocalPortalegre.svg.png",
    "2"
    )

    const question24 = new Question(
    "24",
    "A que cidade pertence este monumento?",
    ["Porto","Setubal","Braga","Vila-Real"],
    "Setubal",
    "20",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Setubal.Bocage.jpg/800px-Setubal.Bocage.jpg",
    "2"
    )

    const question25 = new Question(
    "25",
    "Onde fica esta universidade?",
    ["Porto","Coimbra","Viseu","Guarda"],
    "Coimbra",
    "20",
    "../img/Coimbra.png",
    "2"
    )

    const question26 = new Question(
    "26",
    "Quantos habitantes tem a cidade de Portalegre?",
    ["21800","130000","50000","26000"],
    "21800",
    "20",
    "https://fotos.web.sapo.io/i/o2402ca38/19591_001a24ay.jpg",
    "2"
    )


    questions2.push(question21,question22,question23,question24,question25,question26)
	localStorage.setItem("questions2", JSON.stringify(questions2))

}

//perguntas nivel 3
export let questions3 = []

if (localStorage.questions3){
	questions3 = JSON.parse(localStorage.questions3)
}

else {

	const question50 = new Question (
	"50",
	"Nivel 3 questions?",
	["Porto","Lisboa","Certa1","Guimarães"],
    "Certa1",
	"10",
    "",
    "3"
	)

	const question51 = new Question(
	"51",
	"Nivel 3 questions?2",
	["Viseu","Évora","Santarém","Certa2"],
    "Certa2",
	"10",
    "",
    "3"
	)

	const question52 = new Question(
	"52",
	"Nivel 3 questions?3",
	["Certa3","Leiria","Guimarães","Bragança"],
    "Certa3",
	"10",
    "",
    "3"
    )

    const question53 = new Question(
    "53",
    "Nivel 3 questions?4",
    ["Porto","Certa4","Braga","Vila-Real"],
    "Certa4",
    "10",
    "",
    "3"
    )

    const question54 = new Question(
    "54",
    "Nivel 3 questions?5",
    ["214349","Certa5","210323","215000"],
    "Certa5",
    "10",
    "",
    "3"
    )

    const question55 = new Question(
    "55",
    "Nivel 3 questions?6",
    ["Certa6","Lisb","Guims","Brag"],
    "Certa6",
    "10",
    "",
    "3"
    )


    questions3.push(question50,question51,question52,question53,question54,question55)
	localStorage.setItem("questions3", JSON.stringify(questions3))

}




//###################ALL FUNCTIONS#################



/**
 * Função que recebe os dados do users e adiciona-o
 * @param {string} username Username do user
 * @param {password} password Password
 * @param {string} xp Nível do user
 * @param {string} avatar Foto do utilizador
 */

export function createUser(username, password, xp, avatar, typeUser){
    console.log("teste") 
    let existUser = false;
     const confPassword = document.querySelector("#txtConfPassword").value
     if(username === ""){
         alert("Insira um username")
     }
     else{
     for(const user of users){
         if(user.username === username){
             existUser = true;
         }
     }
    }
     if(!existUser){
         if(password === ""){
             alert("Insira uma password")
         }
         else{
         if(confPassword === password){
             xp = 10; //utilizador começa com 10 pontos ao fazer registo
         users.push(new User(username, password, xp, avatar,typeUser))
         localStorage.setItem("users", JSON.stringify(users))
         sessionStorage.setItem("loggedUser",username)
         //alert(`Bem-vindo ao City Guess ${username}`)
         console.log("teste")
         return true 
        }
        else{
            alert(`Passwords diferentes! Confirme Novamente`)
        }
        }
     }
     else{
         alert(`Este Username já existe`)
    }
    return false
}

/**
 * Função que recebe os dados para iniciar sessão
 * @param {string} username Username
 * @param {password} password Password
 */
export function login(username, password){
    let existUser = false
    for(const user of users){
         if(user.username === username && user.password === password){
            
            sessionStorage.setItem("loggedUser", username)
            sessionStorage.setItem("loggedPP", user.xp)
            sessionStorage.setItem("loggedTypeUser", user.typeUser)
            sessionStorage.setItem("loggedAvatar", user.avatar)
            existUser=true
        }
        }
        return existUser
        
}
/**
 * Função para fazer logout
 */
export function logout(){
    sessionStorage.removeItem("loggedUser")
    sessionStorage.removeItem("loggedPP")
    sessionStorage.removeItem("loggedTypeUser")
   // sessionStorage.removeItem("loggedAvatar", user.avatar)
}

/**
 * Função para adicionar País
 * @param {string} name Nome do país
 * @param {string} region Continente do País
 * @param {image} photo Imagem do país
 */
export function addCountry(name, region, country, photo, description, img2,rating,stage){
    console.log('enter addCountry')
 citys.push(new City(name, region, country, photo, description,img2,rating,stage))
 localStorage.setItem("citys", JSON.stringify(citys))
}

/**
 * Função que recebe o nome da região e define-a como a região a ser exibida
 * @param {string} txtName Nome da região
 */
export function setCurrentRegion(txtName) {
    localStorage.setItem("region", txtName)
    location.href = "../html/citys.html"
}

/**
 * Função que recebe o nome de uma região e devolve o objeto Region associado
 * @param {string} txtName Nome da região
 * @returns {object} o objeto Region
 */
export function getCurrentRegion() {
    const region = localStorage.getItem("region")
    for (let i = 0; i < regions.length; i++) {
        if (regions[i].name === region) {
            return regions[i]
        }
    }
}

/**
 * Função para ordenar por ordem alfabetica as cidades
 */

 export function sortCitys() { 
     citys.sort(City.compare)
     localStorage.setItem("citys", JSON.stringify(citys))
 }

 /**
  * Função para ordenar pelas melhores pontuações
  */
export function moreVotedCitys(){
    citys.sort(City.compare1)
    localStorage.setItem("citys", JSON.stringify(citys))
}

 /**
 * Função que recebe o nome da cidade e define-a como a cidade a ser exibida
 * @param {string} txtName Nome da cidade
 */
export function setCurrentCity(txtName) {
    localStorage.setItem("city", txtName)
    location.href = "../html/cityDescription.html"
}

export function removeCity(txtName) {
    let removeCity = confirm(`Deseja mesmo remover a cidade ${txtName}?`)
    if (removeCity) {
        for (let i = 0; i < citys.length; i++) {
            if (citys[i].name === txtName) {
                citys.splice(i, 1)
            }
        }
        localStorage.setItem("citys", JSON.stringify(citys))
        location.reload()
    }
}

/**
 * Função que recebe o nome de uma cidade e devolve o objeto City associado
 * @param {string} txtName Nome da cidade
 * @returns {object} o objeto City
 */
export function getCurrentCity() {
    const city = localStorage.getItem("city")
    for (let i = 0; i < citys.length; i++) {
        if (citys[i].name === city) {
            return citys[i]
        }
    }
}
/**
 * Função que recebe os comentários
 * @param {string} user Nome do user
 * @param {string} coment Comentário
 * @param {date} date Data do comentário~
 * @param {date} hour Hora do comentário
 * @param {string} city Cidade a que corresponde o comentário
 */
export function comment(user,coment,date,hour,city){
    coments.push(new Coments(user,coment,date,hour,city))
    localStorage.setItem("coments", JSON.stringify(coments))
}

/**
 * Função que altera a password
 * @param {password} newPass 
 * @param {password} oldPass 
 */
export function changePassword(newPass,oldPass,){
    for (const user of users) {
        if(user.username === sessionStorage.getItem("loggedUser")){
            if(user.password === oldPass){
                user.password = newPass;
                localStorage.setItem("users", JSON.stringify(users))
            }
            else{
                alert("Antiga password não corresponde")
            }
        }      
    }
}
/**
 * Função para alterar foto de perfil
 * @param {img} avatar 
 */
export function changeAvatar(avatar){
    for (const user of users) {
        user.avatar = avatar
    }
}

/**
 * Função que faz a escolha aleatoria da pergunta
 */
   export function choose() {  // funcao para randomizar as perguntas no quiz
    
    //escolher um numero aleatorio entre 0 e (questions.lenght -1)
    let num = Math.floor(Math.random() * (questions.length - 0));
    
    // nao repete a posicao do array
    if (!randomIndexesOfQuestions.includes(num)) {
        randomIndexesOfQuestions.push(num)
      }
      // se depois de escolher o numero a lenght dos random indees for 5, escolhe as perguntas com esses indices e adiciona as ao novo array (ask)
      if (randomIndexesOfQuestions.length === 5) {
		ask = randomIndexesOfQuestions.map(indexOfQuestion => questions[indexOfQuestion])
		
      } else {
        // se nao tiver 5 perguntas volta atras para escolher
        choose();
      }

 }


 export function choose2() {  // funcao para randomizar as perguntas no quiz
    
    //escolher um numero aleatorio entre 0 e (questions.lenght -0)  tem de ser -0 se nao ele nunca vai buscar a ultima pergunta do array
    let num = Math.floor(Math.random() * (questions2.length - 0));
    
    // nao repete a posicao do array
    if (!randomIndexesOfQuestions.includes(num)) {
        randomIndexesOfQuestions.push(num)
      }
      // se depois de escolher o numero a lenght dos random indees for 5, escolhe as perguntas com esses indices e adiciona as ao novo array (ask)
      if (randomIndexesOfQuestions.length === 5) {
		ask2 = randomIndexesOfQuestions.map(indexOfQuestion => questions2[indexOfQuestion])
		
      } else {
        // se nao tiver 5 perguntas volta atras para escolher
        choose2();
      }

 }


 /**
 * Função que faz a escolha aleatoria da pergunta nivel 2
 */
export function choose3() {  // funcao para randomizar as perguntas no quiz
    
    //escolher um numero aleatorio entre 0 e (questions.lenght -0)  tem de ser -0 se nao ele nunca vai buscar a ultima pergunta do array
    let num = Math.floor(Math.random() * (questions3.length - 0));
    
    // nao repete a posicao do array
    if (!randomIndexesOfQuestions.includes(num)) {
        randomIndexesOfQuestions.push(num)
      }
      // se depois de escolher o numero a lenght dos random indees for 5, escolhe as perguntas com esses indices e adiciona as ao novo array (ask)
      if (randomIndexesOfQuestions.length === 5) {
		ask3 = randomIndexesOfQuestions.map(indexOfQuestion => questions3[indexOfQuestion])
		
      } else {
        // se nao tiver 5 perguntas volta atras para escolher
        choose3();
      }

 }



 

 //Função para ordenar o ranking
 export function compareXP(){
    users.sort(User.compare3)
    localStorage.setItem("users", JSON.stringify(users))
}

