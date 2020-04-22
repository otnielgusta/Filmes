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
        async delete(request, response){
            const { id } = request.params;
            const usuario_id = request.headers.authorization;

            const filme = await connection('filme')
                .where('id', id)
                .select('idUsuario')
                .first()
           
            if(filme.idUsuario != usuario_id){
                console.log(usuario_id, id);
                return response.status(401).json({error:'Operação não permitida'});
            }

            await connection('filme')
                .where('id', id)
                .delete()

            return response.status(204).send();
                
        }

  
}

    