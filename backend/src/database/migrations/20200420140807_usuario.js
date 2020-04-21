
exports.up = function(knex) {
    return knex.schema.createTable('usuario', function(table){
        table.increments('id');
        table.string('nomeUsuario').notNullable();
        table.string('senha').notNullable();
        
    });
};

exports.down = function(knex) {
  
};
