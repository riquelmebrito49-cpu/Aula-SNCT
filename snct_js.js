const linha = document.getElementById("linha");
const detalhe = document.getElementById("detalhe");

// Mostra os cards na tela automaticamente baseando-se no arquivo de dados
function mostrar() {
  linha.innerHTML = cientistas.map(c => `
    <article class="card" tabindex="0" data-nome="${c.nome}">
      <time>${c.ano}</time>
      <h2>${c.nome}</h2>
      <p>${c.resumo}</p>
    </article>
  `).join("");
}

// Abre a janela pop-up com os fatos da cientista selecionada
function abrir(nome) {
  const c = cientistas.find(x => x.nome === nome);
  document.getElementById("dNome").textContent = c.nome;
  document.getElementById("dMeta").textContent = `${c.area} · ${c.local}`;
  document.getElementById("dResumo").textContent = c.resumo;
  document.getElementById("dFatos").innerHTML = c.fatos.map(f => `<li>${f}</li>`).join("");
  detalhe.showModal();
}

// Eventos de clique nos cartões
linha.addEventListener("click", e => {
  const c = e.target.closest(".card");
  if (c) abrir(c.dataset.nome);
});

// Botão de fechar o pop-up
document.getElementById("fechar").onclick = () => detalhe.close();

// Executa a função ao carregar a página
mostrar();

// adicinar foto dos cientistas
function mostrar() {
  linha.innerHTML = cientistas.map(c => `
    <article class="card" tabindex="0" data-nome="${c.nome}">
      <div class="card-conteudo">
        <!-- Adicionamos a tag da foto aqui -->
        <img src="${c.foto}" alt="Foto de ${c.nome}" class="foto-cientista">
        <div>
          <time>${c.ano}</time>
          <h2>${c.nome}</h2>
          <p>${c.resumo}</p>
        </div>
      </div>
    </article>
  `).join("");
}