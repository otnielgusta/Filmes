const connection = require('../database/connection');

module.exports = {

    async create(request, response){
        const { nome, descricao, imagem, idCategoria, idUsuario } = request.body;
        
        await connection('filme').insert({
            nome,
            descricao,
            imagem,
            idCategoria,
            idUsuario,
    
        });
        
        return response.json();
    },

    async listaFilmes(request, response){
        const usuario_id = request.headers.authorization;

        const filmes = await connection('filme')
            .innerJoin('categoria', 'filme.idCategoria', 'categoria.idCategoria')
            .innerJoin('usuario', 'filme.idUsuario', 'usuario.idUsuario')
            .select([
                'filme.*',
                'categoria.nomeCategoria',
                'usuario.nomeUsuario'
            ])
            .where('usuario.idUsuario', '=', usuario_id)
            
        
        return response.json(filmes);
    },
    async teste(request, response){
        const testando = await connection('filme')
            .select('*')

        return response.json(testando);
    }

  
}

    