document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');

    // Função para tratar os erros das solicitações
    const handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    // Função para buscar os dados da API
    const fetchData = async () => {
        try {
            // Fazendo um requisição GET
            const response = await fetch('http://localhost:3000/alunos');

            // Tratando o erro na resposta
            handleErrors(response);

            // Converter os dados para JSON
            const alunos = await response.json();

            // Exibindo os dados na página
            alunos.forEach(aluno => {
                const alunoElement = document.createElement('div');
                alunoElement.innerHTML = `<strong>${aluno.nome}</strong><p>${aluno.curso}</p>`;
                dataContainer.appendChild(alunoElement);
            });
        } catch (error) {
            console.log('Erro ao buscar os dados', error);
        }
    };

    // Chamando a função para carregar os dados na tela
    fetchData();
});