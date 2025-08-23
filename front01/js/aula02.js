// Seleciona os elementos principais uma vez para melhor performance
const novaTarefaInput = document.getElementById('nova-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
novaTarefaInput.focus();

function adicionarTarefa() {
    const textoTarefa = novaTarefaInput.value;

    if (textoTarefa.trim() === '') {
        alert("Por favor, digite uma tarefa.");
        return; // Sai da função se o input estiver vazio
    }

    // --- Criação dos elementos ---
    // 1. Cria o item da lista (<li>)
    const novoItemLista = document.createElement('li');

    // 2. Cria o texto da tarefa e o adiciona ao <li>
    const textoDoItem = document.createTextNode(textoTarefa);
    novoItemLista.appendChild(textoDoItem);

    // 3. Cria o botão de remover
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.className = 'btn-remover'; // Adiciona a classe para o estilo

    // --- A LÓGICA DO removeChild() ---
    // 4. Adiciona um "ouvinte de evento" ao botão de remover
    botaoRemover.addEventListener('click', function() {
        // 'this' se refere ao botão que foi clicado.
        // 'this.parentElement' é o elemento pai do botão, que é o <li>.
        const itemParaRemover = this.parentElement;

        // 'listaTarefas' é a <ul>, o elemento pai do <li>.
        // O pai (lista) remove o filho (itemParaRemover).
        listaTarefas.removeChild(itemParaRemover);
    });

    // 5. Adiciona o botão de remover dentro do <li>
    novoItemLista.appendChild(botaoRemover);

    // 6. Adiciona o <li> completo (com texto e botão) na lista <ul>
    listaTarefas.appendChild(novoItemLista);

    // Limpa o campo de input e foca nele para a próxima tarefa
    novaTarefaInput.value = '';
    novaTarefaInput.focus();
}