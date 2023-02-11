const { PrismaClient } = require('@prisma/client')

const getStores = async () => {
  try {
    const prisma = new PrismaClient()

    return await prisma.store.findMany()
  } catch (error) {
    throw error
  }
}

const createStore = async (
  store,
  store_name,
  store_manager,
  open_date,
  phone_number,
  store_type,
  default_wh
) => {
  try {
    const prisma = new PrismaClient()

    return await prisma.store.create({
      data: {
        store,
        store_name,
        store_manager,
        open_date,
        phone_number,
        store_type,
        default_wh,
      },
    })
  } catch (error) {
    throw error
  }
}

module.exports = { createStore, getStores }
