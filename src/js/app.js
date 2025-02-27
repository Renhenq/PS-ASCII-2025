// Função para alterar as informações dentro do modal e torná-lo visível.
function openModal(imageSrc, title, desc, tecs, rep, proj) {
    document.getElementById("modal-img").src = imageSrc;
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-desc").textContent = desc;
    document.getElementById("modal-tecs").textContent = "Tecnologias utilizadas: " + tecs.join(", ") + '.';
    document.getElementById("modal-link-rep").href = rep;
    document.getElementById("modal-link-project").href = proj;

    document.getElementById("modal").style.display = "flex";
}

// Função para alterar o display do modal para não ficar visível.
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Função para, caso haja um clique fora da janela do modal, mas ainda na classe "modal", chame a função de fechá-lo.
window.onclick = function(event) { // Quando houver um clique na janela.
    let modal = document.getElementById("modal");
    if (event.target === modal) { // Se o clique for no elemento de classe "modal".
        closeModal();
    }
};

// Função para alternar propriedades css dos botões da seção de habilidades interpessoais.
let skill = null;
function changeText(text, element){
    document.getElementById("i-skill-text").textContent = text; // Altera o texto exibido.

    if(skill){ // Se houver um botão já clicado, altera suas classes.
        skill.classList.remove("i-skill-pressed");
        // Seleciona elemento dentro do botão com querySelector e altera sua classe.
        skill.querySelector(".i-skill-arrow").classList.remove("i-skill-arrow-pressed");
        skill.querySelector(".arrow-path-pressed").classList.remove("arrow-path-pressed");
    }

    // Altera classes do novo botão clicado.
    element.classList.add("i-skill-pressed");
    element.querySelector(".i-skill-arrow").classList.add("i-skill-arrow-pressed");
    element.querySelector(".arrow-path").classList.add("arrow-path-pressed");

    // Armazena o botão mais recente.
    skill = element;
}