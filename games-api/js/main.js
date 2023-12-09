document.addEventListener('DOMContentLoaded', () => {
    // Pegando a div com id="data-container"
    const dataContainer = document.getElementById('data-container');
    // Função para lidar com erros nas solicitações fetch
    const handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response);
        }
        return response;
    };

    // Função para buscar e exibir dados da API
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/jogos');
            // Lidando com erros na resposta
            handleErrors(response);
            
            // Converter os dados para JSON
            const data = await response.json();
            
            // Exibir os dados na página html
            data.forEach(jogo => {
                const tagDiv = document.createElement('div');
                tagDiv.innerHTML = `<strong>${jogo.nome}</strong><p>${jogo.preco}</p>`;
                dataContainer.appendChild(tagDiv);
            });
        } catch (error) {
            console.log('Erro: ', error);
        }
    };

    // Chamando a função para buscar e exibir dados ao carregar a página
    fetchData();
});

const createGame = () => {
    const jogoTeste = {
        "nome": "Dark Souls",
        "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        "preco": 300
    };
    fetch('http://localhost:3000/jogos', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(jogoTeste)
    })
    .then(response => response.json())
    .then(data => console.log('sucesso: ', data))
    .catch((error) => console.log('Erro: ', error));
};