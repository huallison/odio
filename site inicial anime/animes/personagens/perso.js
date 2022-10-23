/*
     
    passo 1: ligar o html e o js
    passo 2: identificar o clique nas abas
    passo 3: desmarcar a aba selecionada
    passo 4: marcar a aba clicada
    passo 5: esconder o conteudo anteior
    passo 6: mostrar o conteudo da aba selecionadaa


*/


const abas = document.querySelectorAll(".aba");

// -PASSO 2- dar um jeito de indentificar o clique no elemento da aba

abas.forEach(aba =>  {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }
        
       selecionarAba(aba)
       InformacaoDaAba(aba)
       
    });
})

function selecionarAba(aba) {
    // -PASSO 3- quando o usuário clicar, desmarcar a aba selecionada

    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    //-PASSO 4- marcar a aba clicada como selecionado

    aba.classList.add("selecionado");

}


function InformacaoDaAba(aba) {

   //-PASSO 5- esconder o conteudo anterior

   const InfoSelecionada = document.querySelector(".informacao.selecionado")
   InfoSelecionada.classList.remove("selecionado")

   //-PASSO 6- mostrar o conteúdo da aba selecionada

   const idDoElementoInfoDaAba = `informacao-${aba.id}` 
   const informacaoASerMostrada = document.getElementById(idDoElementoInfoDaAba)
   informacaoASerMostrada.classList.add("selecionado")


}