
fetch('produtos.json')
  .then(response => response.json())
  .then(produtos => {
    const container = document.getElementById('catalogo');
    produtos.forEach(produto => {
      container.innerHTML += `
        <div class="produto">
          <img src="\${produto.imagem}" alt="\${produto.titulo}" />
          <h3>\${produto.titulo}</h3>
          <p>\${produto.descricao}</p>
          <strong>R$ \${produto.preco.toFixed(2)}</strong>
        </div>
      `;
    });
  });
