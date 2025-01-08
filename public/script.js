// DARK MODE
/*
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.setAttribute('data-theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
  }
});
*/
//

//MENU HAMBURGUER
/*const hamburgerToggle = document.getElementById('hamburger-toggle');
const menu = document.querySelector('nav ul');

hamburgerToggle.addEventListener('click', () => {
  hamburgerToggle.classList.toggle('active');
  menu.classList.toggle('active');
});*/
//


// MONTA OS CARDS 
const cardListHTML = document.getElementById("cards")
function montarCards(){
cardListHTML.innerHTML = "";
cursos.forEach(curso => {
  if (curso.disponivel) {
    const divHTML = document.createElement("div")
    divHTML.className = "card"
    divHTML.setAttribute("data-category", curso.categoria)
    divHTML.innerHTML = `
          <div class="card-aviso">Curso em desenvolvimento</div>
         <a href="${curso.urlUdemy}"><img src="${curso.urlImagem}" alt="${curso.nome}"></a>
          <a href="${curso.urlUdemy}"><h3>${curso.nome}</h3></a>
          <a href="${curso.urlUdemy}"><p>${curso.descricao}</p></a>
          <div class="buttons">
            <a href="apostilas/${curso.arquivoApostila}">Apostila</a>
            <a href="${curso.urlUdemy}">Acessar Curso</a>
          </div>`
    cardListHTML.appendChild(divHTML)
  }
})
}

montarCards();
//

//FILTRO
const categoryFilter = document.getElementById('category-filter');
const cards = document.querySelectorAll('.card');

categoryFilter.addEventListener('change', (event) => {
  montarCards()
  let qtd = 0;
  const selectedCategory = event.target.value;
  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (selectedCategory === 'all' || category === selectedCategory) {
      card.style.display = 'block';
      qtd++;
    } else {
      card.style.display = 'none';
    }
  });
  if(qtd==0){
    cardListHTML.innerHTML = "<div class='not-found'><img src='notfoundicon.png'><h2>Nenhum curso encontrado.</h2></div>"
  }
});

//


//sugestao
const inputSugestaoHTML = document.getElementById("inputSugestao")
function enviarSugestao() {
  if (inputSugestaoHTML.value != "") {
    //alert("Obrigado pela sugestão!")
    const modal = document.getElementById("modal-thanks");
    modal.classList.remove("hidden");
    modal.classList.add("show");
    inputSugestaoHTML.value = ""
  }
  else {
    inputSugestaoHTML.classList.add("input-error");

    // Remover a animação após a conclusão
    setTimeout(() => {
      inputSugestaoHTML.classList.remove("input-error");
      inputSugestaoHTML.focus();
    }, 800);
  }
}

function fecharModal() {
  const modal = document.getElementById("modal-thanks");
  modal.classList.remove("show");
  modal.classList.add("hidden");
}

document.getElementById("modal-thanks").addEventListener("click", (ev) => {
  if (ev.target.id == "modal-thanks") {
    fecharModal()
  }
})
//