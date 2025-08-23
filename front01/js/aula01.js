const novaTarefaInput = document.getElementById('nova-tarefa');
novaTarefaInput.focus();

function adicionarTarefa() {
  const novaTarefaInput = document.getElementById('nova-tarefa');
  const textoTarefa = novaTarefaInput.value;
  const listaTarefas = document.getElementById('lista-tarefas');
  if (textoTarefa) {
    // 1. Cria um novo elemento <li>.
    const novoItemLista = document.createElement('li');

    // 2. Cria o texto para o item.
    const textoDoItem = document.createTextNode(textoTarefa);

    // 3. Adiciona o nó de texto como filho do elemento <li>.
    novoItemLista.appendChild(textoDoItem);

    // 4. Adiciona o novo <li> (com seu texto) como filho da lista <ul>.
    listaTarefas.appendChild(novoItemLista);

    // Limpa o campo de input para a próxima tarefa.
    novaTarefaInput.value = '';
    novaTarefaInput.focus();
  }
}

