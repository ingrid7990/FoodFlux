var menuIcon = document.querySelector('.menu-icon'); /* adiciona o clique do botão*/
var ul = document.querySelector('ul'); /*seleciona a ul*/

menuIcon.addEventListener('click', ()=>{ /*quando clicar no icone do menu vai executar tudo que tem dentr da função*/
    
    if(ul.classList.contains('ativo')){ /*se a ul tiver a classe ativo*/
        ul.classList.remove('ativo'); /*remove a classe ativo*/
        document.querySelector('.menu-icon img').src="../assets/menuicon (2).png"; /*muda o icone do menu para o icone de menu*/
    } else{
        ul.classList.add('ativo'); /*se não tiver a classe ativo, adiciona a classe ativo*/
        document.querySelector('.menu-icon img').src="../assets/close_icon.png"; /*muda o icone do menu para o icone de fechar*/

        
    }
  
});

function abrirPopup(aba) {
    document.getElementById("authPopup").style.display = "flex";
    abrirAbaDireto(aba);
}

function fecharPopup() {
    document.getElementById("authPopup").style.display = "none";
}

function abrirAba(evt, aba) {
    const tabs = document.querySelectorAll('.tab-content');
    const links = document.querySelectorAll('.tablink');
    tabs.forEach(t => t.classList.remove('ativo'));
    links.forEach(l => l.classList.remove("active"));

    document.getElementById(aba).classList.add("ativo");
    evt.currentTarget.classList.add("active");
}

function abrirAbaDireto(aba) {
    const tabs = document.querySelectorAll('.tab-content');
    const links = document.querySelectorAll('.tablink');
    tabs.forEach(t => t.classList.remove('ativo'));
    links.forEach(l => l.classList.remove("active"));

    document.getElementById(aba).classList.add("ativo");
    document.querySelector(`.tablink[onclick*="${aba}"]`).classList.add("active");
}

window.onclick = function(event) {
    const popup = document.getElementById("authPopup");
    if (event.target === popup) {
        fecharPopup();
    }
}
    
