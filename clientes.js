
fetch('clientes.json')
    .then(response => response.json())
    .then(data => {
        const lista = document.getElementById('clientes-lista');
        data.forEach(cliente => {
            const item = document.createElement('li');
            item.textContent = `Nome: ${cliente.nome} | Email: ${cliente.email} | Telefone: ${cliente.telefone}`;
            lista.appendChild(item);
        });
    })
    .catch(error => console.error('Erro ao carregar os clientes:', error));
