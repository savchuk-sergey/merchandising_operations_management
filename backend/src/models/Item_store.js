const db = require('../db')

function ItemStore({
  item = '',
  store = '',
  retail_price = '',
  qty = '',
  created_at = '',
  created_by = '',
  updated_at = '',
  updated_by = '',
}) {
  this.item = item
  this.store = store
  this.retail_price = retail_price
  this.qty = qty
  this.created_at = created_at
  this.created_by = created_by
  this.updated_at = updated_at
  this.updated_by = updated_by
}

ItemStore.prototype.createItemStore = async function () {
  try {
    console.log(this.item, this.store, this.retail_price)
    const { rows } = await db.query(
      `call main.create_item_store($1, $2, $3, $4)`,
      [this.item, this.store, this.retail_price, 'admin']
    )
    return rows
  } catch (error) {
    throw error
  }
}

ItemStore.prototype.getItemStores = async function () {
  try {
    const { rows } = await db.query(
      `SELECT * FROM main.item_store where
            item_id like $1 and
            store_id::varchar(255) like $2 and
            retail_price::varchar(255) like $3 and
            qty::varchar(255) like $4 and
            date_trunc('day', created_at)::varchar(255)  like $5 and
            created_by like $6 and
            date_trunc('day', updated_at)::varchar(255) like $7 and
            updated_by like $8`,
      [
        `%${this.item}%`,
        `%${this.store}%`,
        `%${this.retail_price}%`,
        `%${this.qty}%`,
        `%${this.created_at}%`,
        `%${this.created_by}%`,
        `%${this.updated_at}%`,
        `%${this.updated_by}%`,
      ]
    )
    return rows
  } catch (error) {
    throw error
  }
}

ItemStore.prototype.deleteItemStore = async function () {
  try {
    const { rows } = await db.query(
      `DELETE FROM main.item_store
            WHERE item = $1 and store = $2`,
      [this.item, this.store]
    )
    return rows
  } catch (error) {
    throw error
  }
}

module.exports = ItemStore
