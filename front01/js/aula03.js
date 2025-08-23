// Seleciona os elementos do DOM
const nameInput = document.getElementById('nameInput');
const registerButton = document.getElementById('registerButton');
const nameTableBody = document.getElementById('nameTableBody');

// Variáveis para controlar o estado de edição
let isEditing = false;
let currentEditRow = null;

// Função para adicionar ou salvar um nome
const handleRegisterClick = () => {
    const name = nameInput.value.trim();

    if (name === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    if (isEditing) {
        // Se estiver editando, atualiza o nome na linha atual
        currentEditRow.cells[0].textContent = name;
        
        // Restaura o botão para o estado "Cadastrar"
        registerButton.textContent = 'Cadastrar';
        
        // Reseta o estado de edição
        isEditing = false;
        currentEditRow = null;
    } else {
        // Se não estiver editando, cria uma nova linha na tabela
        createRow(name);
    }

    // Limpa o input e foca nele para a próxima entrada
    nameInput.value = '';
    nameInput.focus();
};

// Função para criar uma nova linha na tabela
const createRow = (name) => {
    const row = nameTableBody.insertRow(); // Cria uma nova linha <tr>

    const nameCell = row.insertCell(0);   // Cria a célula do nome <td>
    const actionCell = row.insertCell(1); // Cria a célula das ações <td>

    nameCell.textContent = name;

    // Cria o botão de Editar
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.onclick = () => {
        // Preenche o input com o nome da linha atual
        nameInput.value = nameCell.textContent;
        
        // Altera o estado para "edição"
        isEditing = true;
        currentEditRow = row;
        
        // Atualiza o botão principal para "Salvar Alteração"
        registerButton.textContent = 'Salvar Alteração';
        nameInput.focus();
    };

    // Cria o botão de Excluir
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.onclick = () => {
        // Remove a linha (row) da tabela
        if (confirm(`Tem certeza que deseja excluir "${nameCell.textContent}"?`)) {
            nameTableBody.removeChild(row);
        }
    };

    // Adiciona os botões à célula de ações
    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);
};

// Adiciona o evento de clique ao botão de cadastro
registerButton.addEventListener('click', handleRegisterClick);

// Permite cadastrar pressionando a tecla "Enter" no campo de input
nameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleRegisterClick();
    }
});