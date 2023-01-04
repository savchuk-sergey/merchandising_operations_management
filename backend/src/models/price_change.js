const { PrismaClient } = require('@prisma/client')

const createPriceChange = async (
  item_id,
  store_id,
  change_amount
) => {
  try {
    const prisma = new PrismaClient()

    return await prisma.item_store.update({
      where: {
        item_id,
        store_id,
      },
      data: {
        retail_price: change_amount,
      },
    })
  } catch (error) {
    throw error
  }
}

module.exports = { createPriceChange }
