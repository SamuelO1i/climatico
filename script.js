

const key = "d51818df4dc565b6b21c357be033769e"


function colocarDadosNaT(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " +dados.name
    console.log(dados)
    document.querySelector(".tempera").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".nub").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric `).then(resposta => resposta.json())
  
    
    colocarDadosNaT(dados)
}


function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade) 
    
}