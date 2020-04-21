const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { nome, senha } = request.body;

        const usuario = await connection('usuario')
            .select('nomeUsuario', 'idUsuario')
            .where({
                nomeUsuario: nome,
                senha: senha
            })
            .first();

        if (!usuario){
           
            return response.status(400).json({ error: "Usuário não encontrado" });
        }
            
          
        return response.json(usuario);
    },
}
        

    
