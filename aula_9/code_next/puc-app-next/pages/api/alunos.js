// /api/alunos
// This route should accept just GET requests


function getAlunos(req, res) {
    const alunos = [{
        id: 1,
        nome: 'Rafael',
        email: 'r@gmail.com',
        telefone: '1111-2222',
        idade: 25
    }];
    if (req.method === 'GET'){
        // Aqui poderia ser realizado uma conexão com banco de dados, requisição para
        // Outras API's, etc. Trabalho de um servidor comum.
        return res.status(200).json(alunos);
    }

    return res.status(400);

}

export default getAlunos;