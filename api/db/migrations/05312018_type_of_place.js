//Name, location (longitude/latitude), address, type (Hospital,School,Park,Supermarket), Status (Approve/deny/pending).

exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('typeOfPlace', table => {
    table.increments();
    table.string('name').notNullable();
  }).insert([
    {id: 1, name: 'hospital'},
    {id: 2, name: 'school'},
    {id: 3, name: 'park'},
    {id: 4, name: 'supermarket'},
  ]);
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('typeOfPlace');
};