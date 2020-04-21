
exports.up = function(knex) {
  return knex.schema.createTable('filme', function(table){
    table.increments('id');
    table.string('nome').notNullable();
    table.string('descricao').notNullable();
    table.string('imagem');
    
    table.integer('idCategoria').notNullable();
    table.foreign('idCategoria').references('id').inTable('categoria');

    table.integer('idUsuario').notNullable();
    table.foreign('idUsuario').references('id').inTable('usuario');
  });
};

exports.down = function(knex) {
  
};
