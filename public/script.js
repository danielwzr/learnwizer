// DARK MODE
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.setAttribute('data-theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
  }
});
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

cursos.forEach(curso => {
  const divHTML = document.createElement("div")
  divHTML.className = "card"
  divHTML.setAttribute("data-category", curso.categoria)
  divHTML.innerHTML = `
          <div class="card-aviso">Curso em desenvolvimento</div>
          <img src="${curso.urlImagem}" alt="${curso.nome}">
          <h3>${curso.nome}</h3>
          <p>${curso.descricao}</p>
          <div class="buttons">
            <a href="apostilas/${curso.arquivoApostila}">Apostila</a>
            <a href="${curso.urlUdemy}">Acessar Curso</a>
          </div>`
  cardListHTML.appendChild(divHTML)
})
//

//FILTRO
const categoryFilter = document.getElementById('category-filter');
const cards = document.querySelectorAll('.card');

categoryFilter.addEventListener('change', (event) => {
  const selectedCategory = event.target.value;
  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (selectedCategory === 'all' || category === selectedCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
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
  else{
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

document.getElementById("modal-thanks").addEventListener("click", (ev)=>{
  if(ev.target.id == "modal-thanks"){
    fecharModal()
  }
})
//