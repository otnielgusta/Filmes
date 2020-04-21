
exports.up = function(knex) {
    return knex.schema.createTable('categoria', function(table){
        table.increments('id');
        table.string('nomeCategoria').notNullable();
        
    });
};

exports.down = function(knex) {
  
};
