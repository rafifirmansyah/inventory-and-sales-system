import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'logs'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').notNullable().unsigned()
      table.string('url', 255).nullable()
      table.string('method', 6).nullable()
      table.string('ip', 20).nullable()
      table.string('http_code', 3).nullable()
      table.json('user_params').nullable()
      table.json('user_inputs').nullable()
      table.json('old_data').nullable()
      table.json('new_data').nullable()
      table.string('success_message', 500).nullable()
      table.string('error_message', 500).nullable()
      table.timestamp('created_at', { useTz: false }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
