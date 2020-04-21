const connection = require('../database/connection');


module.exports = {
    async create(request, response){
        const { nomeCategoria } = request.body;

        await connection('categoria').insert({
            nomeCategoria,
        });

        return response.json();
    },

    async listarCategorias(request, response){
        const categoria = await connection('categoria').select('*').orderBy('nomeCategoria', 'asc');

        return response.json(categoria);
    }
}