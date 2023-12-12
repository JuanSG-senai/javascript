// Importar o arquivo que tem os metodos de exceptions
import { handleErrors } from './exception.js';

var URL = 'http://localhost:3000/jogos';

export const getAllGames = async () => {
    try {
        // Fazendo uma solicitação GET para obter jogos
        const response = await fetch(URL);

        // Lidando com erros na resposta
        handleErrors(response);
        
        // Converter os dados para JSON
        return await response.json();

    } catch (error) {
        console.log('Erro: ', error);
    }
};