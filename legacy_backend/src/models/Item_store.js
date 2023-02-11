const os = require('os')
const { PrismaClient, Prisma } = require('@prisma/client')

const createItemStore = async (
  item_id,
  store_id,
  retail_price,
  created_at = new Date(),
  created_by = os.userInfo().username,
  updated_at = new Date(),
  updated_by = os.userInfo().username
) => {
  try {
    const prisma = new PrismaClient()

    return await prisma.item_store.create({
      data: {
        item_id,
        store_id: parseInt(store_id),
        retail_price: parseFloat(retail_price),
        created_at,
        created_by,
        updated_at,
        updated_by,
      },
    })
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError
    ) {
      // The .code property can be accessed in a type-safe manner
      // error code - P2002 is unique constraint error
      if (error.code === 'P2002') {
        const errorMessage =
          'There is a unique constraint violation, a new item/store cannot be created with this details'
        console.log(errorMessage)
        error.message = errorMessage
      }
    }
    throw error
  }
}

const getItemStores = async () => {
  try {
    const prisma = new PrismaClient()

    prisma.item_store.findMany().then((r) => console.log(r))

    return await prisma.item_store.findMany()
  } catch (error) {
    throw error
  }
}

const deleteItemStore = async (item, store) => {
  try {
    const prisma = new PrismaClient()

    return await prisma.item_store.delete({
      where: {
        item,
        store,
      },
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  deleteItemStore,
  createItemStore,
  getItemStores,
}
