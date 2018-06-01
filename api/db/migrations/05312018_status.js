//Name, location (longitude/latitude), address, type (Hospital,School,Park,Supermarket), Status (Approve/deny/pending).

exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('status', table => {
    table.increments();
    table.string('name').notNullable();
  }).insert([
    {id: 1, name: 'approve'},
    {id: 2, name: 'pending'},
    {id: 3, name: 'deny'}
  ]);
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('status');
};