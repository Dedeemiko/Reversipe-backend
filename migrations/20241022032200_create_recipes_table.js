/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('recipes', (table) => {
        table.increments('id').primary(); // Auto-incrementing ID
        table.string('title', 255).notNullable(); // Title of the recipe
        table.text('ingredients'); // Ingredients list
        table.text('instructions'); // Cooking instructions
        table.string('picture_link', 255); // Link to the picture
        table.string('place_of_origin', 100); // Place of origin
        table.integer('estimated_time'); // Estimated cooking time in minutes
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('recipes');
};
