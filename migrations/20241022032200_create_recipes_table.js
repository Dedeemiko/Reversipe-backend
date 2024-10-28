/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('recipes', (table) => {
        table.increments('id').primary(); 
        table.string('title', 255).notNullable(); 
        table.text('ingredients'); 
        table.text('instructions'); 
        table.string('picture_link', 255); 
        table.string('place_of_origin', 100); 
        table.integer('estimated_time'); 
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('recipes');
};
