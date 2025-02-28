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


// Verifica se os campos do formulário estão preenchidos e, caso sim, mostra mensagem de que o e-mail foi enviado, limpa
// os campos do formulário e faz o envio. Caso contrário, informa de que os campos devem ser todos preenchidos.
function sendEmail(){
    if (
        document.getElementById("email-userName").value.trim() === '' ||
        document.getElementById("email-userEmail").value.trim() === '' ||
        document.getElementById("email-content").value.trim() === ''
    ) { 
        emailAlert("Preencha todos os campos do formulário.");
    } else {
        emailAlert("E-mail enviado!");
        document.getElementById("email-userName").value = null;
        document.getElementById("email-userEmail").value = null;
        document.getElementById("email-content").value = null;

        document.getElementById("form").submit();
    }
}


// Cria um elemento com uma mensagem caso clique no botão do formulário. Exibe por apenas 4 segundos.
function emailAlert(msg) {
    const message = document.createElement("div");
    message.textContent = msg;
    message.style.position = "fixed";
    message.style.bottom = "10%";
    message.style.left = "50%";
    message.style.transform = "translateX(-50%)";
    message.style.backgroundColor = "#000";
    message.style.color = "#FFF";
    message.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    message.style.padding = "10px 20px";
    message.style.borderRadius = "5px";
    message.style.fontSize = "16px";

    // Adiciona o elemento da div na página.
    document.body.appendChild(message);
    
    // Remove após 4 segundos.
    setTimeout(() => {
        message.remove();
    }, 4000);
}